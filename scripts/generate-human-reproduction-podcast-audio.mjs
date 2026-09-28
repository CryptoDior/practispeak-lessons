/**
 * Life, Decoded — Episode 4: "Human Reproduction"
 * ElevenLabs audio generator
 * ----------------------------------------------------
 * Usage (from the project root, in a terminal that has internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-human-reproduction-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates one audio clip per line of dialogue (Naledi / Michael), using
 *     the ELEVENLABS_API_KEY already in your .env.local.
 *  2. Skips any file that already exists, so if a run gets interrupted or a
 *     line fails, just run the script again and it'll only fill the gaps.
 *  3. This episode is locked to "eleven_v3" per the source script's own
 *     production note (audio tags like [warmly]/[curious]/[laughs]/[impressed]
 *     are read as delivery direction on v3). If your account/plan doesn't have
 *     v3 access, it automatically falls back to eleven_turbo_v2_5 with the
 *     tags stripped out (so they don't get read aloud literally) — but since
 *     you specifically want v3, the script prints a clear warning if any line
 *     had to fall back, so you know to check your plan / re-run later.
 *  4. Stitches every clip together, in order, into one final podcast file —
 *     using ffmpeg if it's installed (cleaner, with short pauses between
 *     lines and longer pauses at each PART transition), or a simple raw
 *     concatenation fallback if ffmpeg isn't found.
 *
 * Excluded from the voice track (per the source PDF's own production note):
 *  - The `> EXAM TIP:` callout blocks and the closing Quick-Reference Recap
 *    (reference material for show notes, not meant to be spoken).
 *  - The `PART n: ...` section headers themselves aren't voiced by either
 *    speaker in the source script (only NALEDI/MICHAEL lines are), so they're
 *    treated as structural markers — a longer pause is inserted at each of
 *    these transitions instead, so the pacing still "feels" the section break.
 *
 * This is the longest episode in the series so far (17 parts) — expect this
 * run to take noticeably longer than Chapters 2 and 3.
 *
 * Output:
 *   podcasts/tmp/human-reproduction-chapter4/*.mp3 (individual clips, kept for resuming)
 *   podcasts/Human-Reproduction-Chapter4-Podcast.mp3 (final stitched episode)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-human-reproduction-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // Mia Moore — Studio Presenter
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

const ROOT = path.resolve('.');
const TMP_DIR = path.join(ROOT, 'podcasts', 'tmp', 'human-reproduction-chapter4');
const OUT_FILE = path.join(ROOT, 'podcasts', 'Human-Reproduction-Chapter4-Podcast.mp3');

// ─────────────────────────────────────────────────────────────────────────
// SCRIPT — ordered dialogue segments only. PART headers, EXAM TIP callouts,
// and the closing Quick-Reference Recap are intentionally left out (they're
// reference/show-notes material, not spoken dialogue in the source script).
// `newPart: true` marks the first line after a PART header, so the stitcher
// inserts a longer pause there instead of a short one.
// ─────────────────────────────────────────────────────────────────────────
const S = [
  { s: 'NALEDI', t: `[warmly] Welcome back to Life, Decoded. Last time we toured the whole animal kingdom's reproductive strategies. Today we're zooming all the way in — to human reproduction.` },
  { s: 'MICHAEL', t: `[curious] The one you warned me was going to be long.` },
  { s: 'NALEDI', t: `[laughs] I did warn you, and I'll warn you again — this is a big topic, structures, hormones, cycles, development, all of it. But it's also one where everything genuinely connects, so if we build it properly, piece by piece, it'll click.` },
  { s: 'MICHAEL', t: `Okay, where do we start?` },
  { s: 'NALEDI', t: `With the big picture — the human life cycle — because it ties directly back to a topic we've already covered on this show: meiosis. Once you've got that map in your head, everything else in this episode is just filling in detail.` },
  { s: 'MICHAEL', t: `I like starting from something familiar. Let's go.` },

  // PART 1: The Human Life Cycle — Where Meiosis, Mitosis, and Fertilisation Fit
  { s: 'NALEDI', t: `So, quick refresher first, because we need this vocabulary solid before anything else. All the body cells — the somatic cells — of a human are diploid, written as 2n, meaning they have two full sets of each chromosome. When humans need to grow, or repair damaged tissue, those somatic cells divide by mitosis — and the new cells produced are identical to the original cell that divided.`, newPart: true },
  { s: 'MICHAEL', t: `Right, mitosis for growth and repair, identical copies. That's consistent with what we covered back in the meiosis episode.` },
  { s: 'NALEDI', t: `Exactly — and here's where today's topic branches off. Sexual reproduction requires two parents, and both the male and the female produce gametes — egg and sperm — through a reduction division called meiosis.` },
  { s: 'MICHAEL', t: `Meiosis — the one that halves the chromosome number.` },
  { s: 'NALEDI', t: `Exactly right. Meiosis ensures the gametes are haploid — written as n — meaning they only have one set of chromosomes, not two. When two gametes fuse — one sperm, one egg — as a result of fertilisation, a diploid zygote is formed.` },
  { s: 'MICHAEL', t: `So haploid plus haploid equals diploid again — the sperm's single set plus the egg's single set gives you back a full double set in the zygote.` },
  { s: 'NALEDI', t: `Exactly — and that zygote then divides by mitosis, over and over, to form an entire human being.` },
  { s: 'MICHAEL', t: `So the whole cycle is: diploid adult → meiosis → haploid gametes → fertilisation → diploid zygote → mitosis → diploid adult again. It's a loop.` },
  { s: 'NALEDI', t: `That's precisely it, and it's worth picturing as a loop, because that's exactly how exam diagrams draw it. In humans specifically, the diploid number is 46 chromosomes — 2n equals 46 — and the haploid number, in the gametes, is 23 — n equals 23.` },
  { s: 'MICHAEL', t: `46 in a normal body cell, 23 in a sperm or an egg.` },
  { s: 'NALEDI', t: `Exactly, and meiosis happens in two specific organs — the ovary, in the female, and the testis, in the male. That's actually the perfect bridge into today's whole episode, because everything we're about to cover — the male system, the female system, puberty, gametogenesis — all of it exists to make that one loop happen successfully.` },

  // PART 2: Key Terminology — Gametogenesis, Oogenesis, Spermatogenesis
  { s: 'MICHAEL', t: `Before we get into the actual anatomy, can we nail down a few words? I have a feeling "gametogenesis," "oogenesis," and "spermatogenesis" are all about to get thrown around a lot, and I want to keep them straight from the start this time.`, newPart: true },
  { s: 'NALEDI', t: `Smart move, let's lock them in early. Gametogenesis is the general term — it's the process in which gametes are produced, in the testes and ovaries, through meiosis.` },
  { s: 'MICHAEL', t: `So gametogenesis is the umbrella term.` },
  { s: 'NALEDI', t: `Exactly. Under that umbrella, you've got two specific versions. Oogenesis is the process that occurs when egg cells are made in the ovary, through meiosis. Spermatogenesis is the process that takes place when sperm cells are made in the testes, through meiosis.` },
  { s: 'MICHAEL', t: `Gametogenesis is the category, oogenesis is the female version, spermatogenesis is the male version. That's a clean parallel — kind of like fertilisation being external or internal from last episode.` },
  { s: 'NALEDI', t: `Nice callback, and yes, exactly that kind of structure. One more term while we're here, because it comes up in both processes: the germinal epithelium. This is a layer of cuboidal epithelium found on the surface of both the testes and the ovaries, and it's what gives rise to the cells that mature to form sperm cells and egg cells respectively.` },
  { s: 'MICHAEL', t: `So the germinal epithelium is the actual starting material — the raw stock cells that eventually become gametes.` },
  { s: 'NALEDI', t: `Exactly right. Keep that term in your back pocket, because we'll need it properly once we get into spermatogenesis and oogenesis in detail.` },

  // PART 3: The Male Reproductive System
  { s: 'MICHAEL', t: `Okay, let's get into the actual anatomy. Male system first?`, newPart: true },
  { s: 'NALEDI', t: `Sure. The male reproductive system consists of a few categories of structure, and it helps to think of them that way rather than as one long list. First — the main male sex organ: a pair of testes, housed in the scrotum. Second — various ducts and tubules: the seminiferous tubules, the epididymis, the vas deferens, and the urethra. Third — accessory glands: the prostate gland, Cowper's gland, and the seminal vesicles. And fourth — the external genitalia: the penis.` },
  { s: 'MICHAEL', t: `Four categories: main organ, ducts, glands, external genitalia. Let's go through the functions one at a time.` },
  { s: 'NALEDI', t: `The testes are oval-shaped glands, suspended in the scrotum, and they have two jobs — they produce sperm cells, and they produce the hormone testosterone.` },
  { s: 'MICHAEL', t: `Two jobs in one organ — gamete production and hormone production.` },
  { s: 'NALEDI', t: `Exactly, worth remembering both. The scrotum is a skin sac that holds the testes — its job is to protect them, and to hold them "outside" the main body, at a temperature about 2°C lower than normal body temperature.` },
  { s: 'MICHAEL', t: `Why does it need to be cooler out there?` },
  { s: 'NALEDI', t: `Hold that thought — we're going to unpack that properly in a moment, because it's a genuinely important exam point on its own. For now, just log that temperature detail. Next: the epididymis — a coiled tubule on the outside of the testes, but still within the scrotum. Its function is to temporarily store spermatids until they mature into proper sperm cells.` },
  { s: 'MICHAEL', t: `So the epididymis is like a maturation holding bay.` },
  { s: 'NALEDI', t: `Exactly that. Then the vas deferens — a muscular tube passing from the epididymis to the urethra — its function is to transport sperm from the epididymis to the urethra. The urethra itself is a tube that runs through the penis, and it transports both urine and semen out of the body — at different times, obviously, never simultaneously.` },
  { s: 'MICHAEL', t: `Shared exit pipe, basically.` },
  { s: 'NALEDI', t: `Exactly. Now the accessory glands — these are the ones that actually contribute fluid to semen, rather than transporting sperm itself. The prostate gland is found below the bladder, at the point where the urethra begins — it's the largest accessory gland — and it produces a nutrient-rich fluid that provides energy for the sperm cells. Cowper's glands are a small pair of glands found below the prostate gland, and they produce mucus that helps with the movement of sperm cells. And the seminal vesicles are a medium-sized pair of glands attached to the end of the vas deferens, and they produce an alkaline fluid — its job is to neutralise the acidity of the vagina, which would otherwise kill the sperm.` },
  { s: 'MICHAEL', t: `So all three glands are basically life-support for the sperm on their journey — energy from the prostate, lubrication from Cowper's glands, and acid protection from the seminal vesicles.` },
  { s: 'NALEDI', t: `That's a genuinely excellent summary of the accessory glands' shared purpose. And finally, the penis — its function is to deliver sperm into the female reproductive tract.` },

  // PART 4: Inside the Testes — Seminiferous Tubules, Sertoli Cells, and Leydig Cells
  { s: 'NALEDI', t: `Now let's zoom in one level further, into the testes themselves, because there's a specific internal structure worth knowing — and this is where that temperature question from a minute ago finally gets answered properly.`, newPart: true },
  { s: 'MICHAEL', t: `Good, I've been waiting.` },
  { s: 'NALEDI', t: `The testes contain seminiferous tubules. These tubules are lined by germinal epithelium cells — that term from earlier — and it's those cells that actually produce sperm cells. Some of those lining cells develop into Sertoli cells, which provide nutrients for the spermatids so they can mature into full sperm cells. And surrounding the seminiferous tubules, in the connective tissue, you've got the Cells of Leydig, which produce testosterone.` },
  { s: 'MICHAEL', t: `So Sertoli cells are like in-house nutrition support, and Leydig cells are the hormone factory, sitting just outside the tubules?` },
  { s: 'NALEDI', t: `Exactly right — nice distinction. Now, back to temperature. It's vitally important that the testes are suspended outside the main body, in the scrotum, because that positioning allows for proper temperature regulation. The optimum temperature for sperm production is 2 to 3°C lower than normal body temperature.` },
  { s: 'MICHAEL', t: `And if it's too warm in there?` },
  { s: 'NALEDI', t: `Then it interferes with the quality of the sperm, and can actually result in male infertility. But here's the clever bit — because the testes are suspended externally, in a flexible skin sac, their temperature can actually be actively adjusted: the scrotum can move the testes closer to the body in cold conditions, to warm them up, or further away from the body in warm conditions, to cool them down.` },
  { s: 'MICHAEL', t: `So the scrotum is basically a built-in thermostat with a physical dial.` },
  { s: 'NALEDI', t: `That's a genuinely great way to picture it.` },

  // PART 5: The Female Reproductive System
  { s: 'MICHAEL', t: `Okay, female system now — same structured approach?`, newPart: true },
  { s: 'NALEDI', t: `Same approach. The female reproductive structure consists of the main female sex organ — the ovaries — the ducts, which are the fallopian tubes — accessory organs, being the uterus and the vagina — and the external genitalia, the vulva.` },
  { s: 'MICHAEL', t: `Main organ, ducts, accessory organs, external genitalia. Same four-category logic as the male system.` },
  { s: 'NALEDI', t: `Exactly, which makes both systems much easier to hold in your head side by side. Let's go through functions. The ovaries are found as a pair, one on either side of the uterus, surrounded by germinal epithelium — and their function is to produce egg cells, and also to secrete the hormones progesterone and oestrogen.` },
  { s: 'MICHAEL', t: `So, same pattern as the testes — the ovaries are both a gamete factory and a hormone factory.` },
  { s: 'NALEDI', t: `Exactly that parallel. The fallopian tubes connect the ovaries to the uterus, and they're lined with ciliated columnar epithelium, which helps move the egg cells along. Their function is to transport egg cells from the ovary to the uterus — and, importantly, the fallopian tube is also the actual site of fertilisation.` },
  { s: 'MICHAEL', t: `So fertilisation doesn't happen in the ovary or the uterus, it happens specifically in that connecting tube?` },
  { s: 'NALEDI', t: `Exactly right, and that's a detail examiners specifically test — people often assume it happens in the uterus. The uterus is a hollow, pear-shaped organ, and its function is to house and protect the embryo and foetus throughout pregnancy. Lining the inside of the uterus is the endometrium — this is the site of implantation, and it's also where the placenta forms.` },
  { s: 'MICHAEL', t: `Endometrium — I remember that word from way back in the meiosis episode's related topics. This is where it actually gets explained properly.` },
  { s: 'NALEDI', t: `Exactly, and we're going to spend a lot more time with the endometrium later in this episode, once we get to the menstrual cycle. Moving on — the cervix is the lower, narrow opening of the uterus, and its job is to stretch and open to allow the baby through during childbirth. The vagina is a muscular tube running from the cervix to the exterior of the body, and it has three separate functions: it receives the penis and semen during sexual intercourse, it acts as the birth canal, and it's also the passage for menstrual blood.` },
  { s: 'MICHAEL', t: `Three jobs for the vagina — intercourse, birth, and menstruation.` },
  { s: 'NALEDI', t: `Exactly. And finally, the vulva — the opening to the vagina, covered by two folds called the labia — its function is to protect the entrance to the vagina.` },

  // PART 6: Puberty
  { s: 'MICHAEL', t: `Okay, before gametogenesis — puberty. I feel like this one's more familiar territory, but let's make sure I've got the hormone-to-change links right.`, newPart: true },
  { s: 'NALEDI', t: `Good instinct to check that specifically, because that's exactly what gets tested — matching the hormone to the change it causes. Puberty marks the onset of sexual maturity, and it's triggered by hormonal changes. In males, the hormone is testosterone; in females, it's oestrogen and progesterone.` },
  { s: 'MICHAEL', t: `One hormone group per sex.` },
  { s: 'NALEDI', t: `Right. Let's go through the changes. In males: testosterone drives growth of hair around the scrotum — that's pubic hair — growth of hair in the armpits, growth of facial hair, the larynx enlarging so the voice becomes deeper, the muscles enlarging and the shoulders becoming wider, and the penis and testes enlarging.` },
  { s: 'MICHAEL', t: `Pubic hair, armpit hair, facial hair, deeper voice, broader build, and genital growth.` },
  { s: 'NALEDI', t: `Exactly. In females: oestrogen and progesterone drive growth of pubic hair around the vulva, growth of hair in the armpits, the hips becoming wider with fat deposited below the skin, and the development of breasts.` },
  { s: 'MICHAEL', t: `So pubic hair and armpit hair are shared between both sexes — those rows appear on both sides of the table — but facial hair and voice-deepening are male-only, and hip-widening and breast development are female-only.` },
  { s: 'NALEDI', t: `Exactly right, and that's precisely the kind of side-by-side table comparison an exam question tends to test — what's shared, and what's sex-specific.` },

  // PART 7: Spermatogenesis
  { s: 'NALEDI', t: `Now — gametogenesis in proper detail, starting with spermatogenesis, since we've already built most of the anatomy we need for it.`, newPart: true },
  { s: 'MICHAEL', t: `Spermatogenesis — sperm production in the testes, through meiosis. We defined that a few minutes ago.` },
  { s: 'NALEDI', t: `Exactly, now let's walk through how it actually happens, step by step. Spermatogenesis occurs in the germinal epithelium of the seminiferous tubules in the testes, and the whole process happens under the influence of testosterone.` },
  { s: 'MICHAEL', t: `Testosterone again — it really is doing a lot of work in this system.` },
  { s: 'NALEDI', t: `It genuinely is — hormone production and gamete maturation, both tied to the same molecule. Here's the process: during puberty, the germinal epithelium contains a diploid number of chromosomes — 46. Under the influence of testosterone, those diploid germinal epithelial cells go through meiosis.` },
  { s: 'MICHAEL', t: `Meiosis — so that diploid 46 becomes haploid, like we covered in the meiosis episode.` },
  { s: 'NALEDI', t: `Exactly — and here's the specific outcome: each cell that goes through meiosis produces four haploid spermatids, each with 23 chromosomes.` },
  { s: 'MICHAEL', t: `Four, not one — because meiosis produces four daughter cells total, from the two divisions.` },
  { s: 'NALEDI', t: `Exactly right, good recall from our meiosis episode. Each of those spermatids then matures to form a haploid sperm cell. And here's a detail worth being precise about: the gametes may end up carrying either 22 autosomes plus an X chromosome, or 22 autosomes plus a Y chromosome.` },
  { s: 'MICHAEL', t: `So it's the sperm cell that actually determines the biological sex of the offspring, depending on whether it's carrying an X or a Y?` },
  { s: 'NALEDI', t: `Exactly right — since the egg cell only ever carries an X, it's the sperm's X-or-Y that decides the outcome.` },
  { s: 'MICHAEL', t: `And now the structure of the actual sperm cell — head, middle, tail, right? I remember that much from a diagram.` },
  { s: 'NALEDI', t: `Exactly those three regions. Let's build it properly. The head is mostly made up of the nucleus, which contains 22 autosomes and one sex chromosome — X or Y. The head also contains the acrosome — a structure containing enzymes that dissolve the outer layer of the egg, allowing fertilisation to actually occur.` },
  { s: 'MICHAEL', t: `So the acrosome is basically the sperm's key, for unlocking its way into the egg.` },
  { s: 'NALEDI', t: `That's a great way to think of it. The middle portion, or neck, contains mitochondria, which provide the energy for the movement of the sperm cell. And the long tail allows the sperm cell to propel itself forward — to swim — through fluid.` },
  { s: 'MICHAEL', t: `Nucleus and genetic payload in the head, energy generator in the middle, propulsion system in the tail.` },
  { s: 'NALEDI', t: `Exactly — and notice the acrosome is technically part of the head too, sitting right at the very tip, ready to fire its enzymes the moment it reaches the egg.` },

  // PART 8: Oogenesis
  { s: 'MICHAEL', t: `Okay, and the female version — oogenesis. Is it a mirror image of spermatogenesis, or does it actually work differently?`, newPart: true },
  { s: 'NALEDI', t: `Genuinely different in a few important ways, so don't just assume it's a straight copy-paste. Oogenesis is the production of female gametes — ova, or egg cells — in the ovaries, and it occurs when the diploid germinal epithelium of the ovaries starts to produce follicles, through mitosis.` },
  { s: 'MICHAEL', t: `Wait — mitosis? Not meiosis?` },
  { s: 'NALEDI', t: `Right at the start, yes — mitosis. The diploid germinal epithelium cells, 2n, go through mitosis to form many follicles. It's only later in the process that meiosis comes in.` },
  { s: 'MICHAEL', t: `Interesting, so oogenesis actually uses both types of division, at different stages — mitosis first to build up a stock of follicles, then meiosis later to actually produce the haploid gamete.` },
  { s: 'NALEDI', t: `Exactly right, that's a subtle but important distinction from spermatogenesis, where meiosis is really the whole story. Here's the rest of the process: every 28 days, the follicle stimulating hormone, FSH, stimulates one particular follicle. Only one single cell inside that follicle enlarges, and goes through the process of meiosis.` },
  { s: 'MICHAEL', t: `So out of potentially many follicles that formed by mitosis, only one gets "activated" by FSH each cycle?` },
  { s: 'NALEDI', t: `Exactly — one follicle, one cycle, roughly once every 28 days. And here's the outcome, which is genuinely a bit different from spermatogenesis too: out of the four haploid cells produced through meiosis, only one cell survives to become a mature ovum.` },
  { s: 'MICHAEL', t: `Only one out of four? What happens to the other three?` },
  { s: 'NALEDI', t: `The other three cells simply degenerate — they break down and don't go on to become anything.` },
  { s: 'MICHAEL', t: `So spermatogenesis gives you four usable sperm cells from every meiotic division, but oogenesis only gives you one usable egg cell, with the other three being discarded.` },
  { s: 'NALEDI', t: `Exactly that contrast, and it's a very commonly tested comparison point.` },
  { s: 'MICHAEL', t: `And the structure of the ovum itself?` },
  { s: 'NALEDI', t: `The human egg, or ovum, is made up of follicle cells, a layer of jelly, cytoplasm, and a haploid nucleus. The nucleus contains 22 autosomes and one sex chromosome — always an X, since the egg only ever carries X. The cytoplasm's job is to nourish the egg. And the jelly layer provides protection for the early developmental stages of the fertilised egg.` },
  { s: 'MICHAEL', t: `So compared to the sperm's head/middle/tail structure built for delivery and propulsion, the egg's structure — follicle cells, jelly, cytoplasm, nucleus — is really built around protection and nourishment instead.` },
  { s: 'NALEDI', t: `That's a genuinely sharp comparison — the sperm cell is essentially built to travel and deliver, while the egg cell is built to receive, protect, and sustain. Their structures literally reflect their different jobs in fertilisation.` },
  { s: 'NALEDI', t: `And one important nuance worth flagging, since it's a genuinely common misconception: it's tempting to assume females keep producing brand-new egg cells throughout their whole life, the same way males continuously produce new sperm. That's actually not correct. Oogenesis largely gets underway prenatally — meaning females are essentially born with a finite, fixed number of primary cells that can go on to become ova, rather than manufacturing new ones from scratch throughout adulthood.` },
  { s: 'MICHAEL', t: `So it's a fixed supply set up basically from birth, being gradually used up one at a time, roughly once per cycle — versus males continuously manufacturing sperm fresh, daily, from puberty onward.` },
  { s: 'NALEDI', t: `Exactly right — another genuinely important contrast between the two processes.` },

  // PART 9: Michael's Gametogenesis Recap
  { s: 'NALEDI', t: `Right before we head into the menstrual cycle — that's a lot of new structure and process. Want to try summarising just the gametogenesis section so far, before we pile more on top?`, newPart: true },
  { s: 'MICHAEL', t: `Good idea, let me try. Gametogenesis is the umbrella term for producing gametes in the testes and ovaries via meiosis — spermatogenesis is the male version, oogenesis is the female version, and both start from germinal epithelium. The male system — testes, scrotum, epididymis, vas deferens, urethra, plus the prostate, Cowper's glands, and seminal vesicles as accessory glands, and the penis — produces sperm and testosterone, with Sertoli cells nourishing the spermatids and Leydig cells producing testosterone, and the whole thing needs to sit 2 to 3 degrees cooler than body temperature. Spermatogenesis itself: diploid germinal cells undergo meiosis under testosterone's influence, producing four haploid spermatids each, which mature into sperm cells with a head — nucleus and acrosome — a mitochondria-packed middle for energy, and a tail for movement. The female system — ovaries, fallopian tubes, uterus with its endometrium, cervix, vagina, vulva — produces ova plus oestrogen and progesterone, and fertilisation actually happens in the fallopian tube, not the uterus. Oogenesis: diploid cells undergo mitosis to form many follicles, FSH activates one follicle every 28 days, that cell undergoes meiosis, and only one of the four resulting cells survives as a mature ovum, with follicle cells, jelly, cytoplasm, and a haploid nucleus. And puberty is what kicks all of this into gear — testosterone driving male changes, oestrogen and progesterone driving female changes.` },
  { s: 'NALEDI', t: `[impressed] That is a genuinely enormous amount of material, delivered back cleanly and correctly. Nicely done.` },
  { s: 'MICHAEL', t: `[laughs] I think structuring it as "male system, then female system" the whole way through actually helped keep it from turning into a jumble.` },
  { s: 'NALEDI', t: `That's a great study strategy in general, actually — mirror the two systems side by side rather than learning them as two totally separate blocks.` },

  // PART 10: The Menstrual Cycle — Key Terminology
  { s: 'NALEDI', t: `Alright — onto the menstrual cycle, which is genuinely one of the most exam-heavy parts of this whole topic, so we're going to take it slowly and build it in layers.`, newPart: true },
  { s: 'MICHAEL', t: `I'm ready. Terminology first, like always?` },
  { s: 'NALEDI', t: `Always. A few terms to lock in before the mechanism. The Graafian follicle is a mature follicle inside the ovary, filled with fluid, in which the ovum grows. Ovulation is the release of an ovum from the Graafian follicle of the ovaries. We've already met the endometrium — the inner lining of the uterus wall. Menstruation is the monthly loss of blood and tissue, as a result of changes that occur in the lining of the uterus. Menopause is the stage in a woman's life when she stops ovulating and menstruating — usually occurring between the ages of 45 and 55. Fertilisation is the fusion of the haploid sperm cell nucleus and the haploid egg cell nucleus, to form a diploid nucleus for the zygote. And implantation is the attachment of the embryo to the endometrium lining the uterus.` },
  { s: 'MICHAEL', t: `That's seven terms — Graafian follicle, ovulation, endometrium, menstruation, menopause, fertilisation, implantation.` },
  { s: 'NALEDI', t: `Exactly, and honestly, once those seven are solid, the rest of this section is really just describing how they interact with each other over time. The menstrual cycle refers to changes that occur in the ovaries and uterus of a female, over a period of 28 days. This cycle begins at puberty and ends at menopause.` },
  { s: 'MICHAEL', t: `And I remember it's actually made up of two cycles happening at the same time, right? Not just one single process.` },
  { s: 'NALEDI', t: `Exactly right — the ovarian cycle and the uterine cycle, running simultaneously, influencing each other. Let's take them one at a time.` },

  // PART 11: The Ovarian Cycle
  { s: 'NALEDI', t: `The ovarian cycle refers to the development and release of an ovum, and it takes place inside the ovary. It begins when FSH — follicle stimulating hormone — is secreted by the pituitary gland. FSH then travels to the ovary, via the blood.`, newPart: true },
  { s: 'MICHAEL', t: `Same FSH from oogenesis a few minutes ago?` },
  { s: 'NALEDI', t: `The exact same hormone — nice continuity. Here's the sequence, step by step. One: FSH stimulates a primary follicle to become a Graafian follicle, which contains a mature ovum. Two: as the Graafian follicle develops, it produces the hormone oestrogen, increasing oestrogen levels in the blood.` },
  { s: 'MICHAEL', t: `So the developing follicle isn't just growing quietly — it's actively pumping out oestrogen the whole time?` },
  { s: 'NALEDI', t: `Exactly — that's a key detail, because that rising oestrogen is what triggers the next step. Three: around Day 14, the Graafian follicle ruptures and releases an ovum, in a process called ovulation. Ovulation itself is stimulated by the luteinising hormone, LH, which is released by the pituitary gland.` },
  { s: 'MICHAEL', t: `So FSH gets the follicle growing and maturing, but it's actually LH that triggers the release itself?` },
  { s: 'NALEDI', t: `Exactly right — two different hormones, two different jobs. Four: LH causes the ruptured Graafian follicle to change into a new structure, called the corpus luteum. The corpus luteum secretes the hormone progesterone, increasing progesterone levels in the blood.` },
  { s: 'MICHAEL', t: `So after releasing the egg, the leftover follicle structure doesn't just disappear — it transforms into a whole new hormone-producing structure?` },
  { s: 'NALEDI', t: `Exactly — that's one of the more surprising parts of this cycle for most students. And five: if fertilisation does not take place, the corpus luteum shrinks, and stops producing progesterone. The ovum passes down the fallopian tube, enters the uterus, and leaves the body through menstruation.` },
  { s: 'MICHAEL', t: `And if fertilisation does happen?` },
  { s: 'NALEDI', t: `Then the corpus luteum remains active, and keeps secreting progesterone — it doesn't shrink and shut down. That single branch point — fertilised or not — is really what determines everything that happens for the rest of the cycle, which is exactly why exam questions love testing it.` },

  // PART 12: The Uterine Cycle
  { s: 'NALEDI', t: `Running in parallel to all of that is the uterine cycle, which shows the changes that occur in the wall of the uterus, as it gradually thickens and becomes more vascular — meaning richly supplied with blood vessels — over that same 28-day period.`, newPart: true },
  { s: 'MICHAEL', t: `So while the ovarian cycle is about the egg's journey, the uterine cycle is about preparing the "nursery" for it, basically.` },
  { s: 'NALEDI', t: `That's a genuinely good way to frame it. Four steps here too. One: the endometrium breaks down and is released — that's menstruation — and this lasts approximately 4 to 7 days. Two: the endometrium is stimulated by oestrogen to become thicker, and to develop more blood vessels and glands.` },
  { s: 'MICHAEL', t: `Same oestrogen from the Graafian follicle, doing double duty — maturing in the ovary while simultaneously rebuilding the uterine lining?` },
  { s: 'NALEDI', t: `Exactly — that's the whole point of the two cycles running together, they're constantly cross-influencing each other. Three: progesterone stimulates the endometrium to become even thicker, and to develop even more blood vessels and glands — and this happens specifically in preparation for the possible implantation of a fertilised ovum.` },
  { s: 'MICHAEL', t: `So the endometrium is essentially being built up in stages, in anticipation, just in case fertilisation happens?` },
  { s: 'NALEDI', t: `Exactly — it's a "prepare for the possibility" system. And four: if fertilisation does not take place, the endometrium tears away, resulting in menstruation — bringing the cycle right back to step one.` },
  { s: 'MICHAEL', t: `So the whole thing is a loop, same as the life-cycle diagram from the start of the episode — menstruation, thickening under oestrogen, further thickening under progesterone, and then either a fresh start via menstruation, or a continuation into pregnancy.` },
  { s: 'NALEDI', t: `[impressed] Exactly — genuinely excellent framing.` },

  // PART 13: Putting the Two Cycles Together — Days 1 to 28
  { s: 'NALEDI', t: `Let's now lay both cycles out together, on the same 28-day timeline, because this is genuinely one of the highest-value tables in the whole chapter — it appears in exams constantly, often as a graph you have to interpret.`, newPart: true },
  { s: 'MICHAEL', t: `Let's build the timeline.` },
  { s: 'NALEDI', t: `Days 1 to 7: in the ovaries, new follicles develop and secrete oestrogen; in the uterus, the lining breaks down and is released — that's menstruation. Days 8 to 13: in the ovaries, a mature Graafian follicle develops and secretes oestrogen; in the uterus, that oestrogen stimulates the endometrium to become thicker, more glandular, and more vascular. Day 14: in the ovaries, the Graafian follicle bursts, releasing an ovum — ovulation.` },
  { s: 'MICHAEL', t: `And nothing specific happening in the uterus right at that exact moment, on day 14 itself?` },
  { s: 'NALEDI', t: `Correct — day 14 is really the ovaries' big moment specifically; the uterus is still coasting on the oestrogen build-up from the days just before. Days 15 to 22: in the ovaries, the Graafian follicle becomes the corpus luteum, which secretes progesterone; in the uterus, that progesterone stimulates the endometrium to become even thicker, more glandular, and more vascular, ready to receive a fertilised ovum. And days 23 to 28: this is the branch point. Without fertilisation — the corpus luteum shrinks and stops producing progesterone. With fertilisation — the corpus luteum remains active and continues producing progesterone, no more follicles develop, and no menstruation takes place.` },
  { s: 'MICHAEL', t: `So the whole 28 days really breaks into four blocks: days 1 to 7 menstruation and new follicle growth, days 8 to 13 the follicle maturing and the lining thickening, day 14 ovulation specifically, and then days 15 to 28 covering the corpus luteum and the fork in the road depending on fertilisation.` },
  { s: 'NALEDI', t: `That is an excellent way to chunk the whole 28 days into memorable blocks rather than 28 separate facts.` },

  // PART 14: Hormonal Control of the Menstrual Cycle
  { s: 'MICHAEL', t: `Okay, we've mentioned FSH, LH, oestrogen, and progesterone constantly this episode — can we put them all together properly now, as one connected system?`, newPart: true },
  { s: 'NALEDI', t: `Absolutely, and this is honestly the single most exam-tested diagram in this whole topic — a graph showing all four hormone levels rising and falling over the 28 days. Let's build the logic of it in words first, then you'll be able to read that graph on sight.` },
  { s: 'MICHAEL', t: `Go for it.` },
  { s: 'NALEDI', t: `Step one: follicle stimulating hormone, FSH, released by the pituitary gland, stimulates the development and maturation of a primary follicle in one of the ovaries. Step two: as that follicle develops into a mature Graafian follicle, it releases oestrogen. Step three: the increasing oestrogen levels stimulate the pituitary gland to release luteinising hormone, LH.` },
  { s: 'MICHAEL', t: `So oestrogen isn't just a passive product of the follicle maturing — it actually reaches back up and triggers the next hormone in the chain?` },
  { s: 'NALEDI', t: `Exactly right — that's the crucial connective step. Step four: the increase in LH causes ovulation to occur. Step five: after ovulation, the Graafian follicle changes into the corpus luteum, which secretes progesterone. Step six — and this is the part that closes the loop — the increased amount of progesterone actually prevents the release of FSH and LH. It inhibits them.` },
  { s: 'MICHAEL', t: `Wait, so progesterone loops back around and shuts down the very hormones that kicked the whole process off in the first place?` },
  { s: 'NALEDI', t: `Exactly — and that mechanism has its own name, which we'll define properly in a second. Step seven: as the corpus luteum eventually breaks down, progesterone levels decrease, which causes the endometrium to break down too. Step eight: the endometrium and the unfertilised ovum are released through the vagina as blood, during menstruation. And step nine: because progesterone levels have now dropped, FSH and LH are no longer being inhibited — they're produced again by the pituitary gland, and the whole cycle restarts.` },
  { s: 'MICHAEL', t: `So it really is a full loop, closing right back at the start — FSH kicks it off, and it's low progesterone specifically that allows FSH to be released again next time.` },
  { s: 'NALEDI', t: `Exactly that.` },
  { s: 'NALEDI', t: `Now, that inhibition step deserves its own proper definition, because it's a concept in its own right: a negative feedback mechanism. This is an interaction between two hormones, where an increase in one hormone stimulates an increase in a second hormone, which then inhibits the first hormone — restoring balance.` },
  { s: 'MICHAEL', t: `So it's specifically that back-and-forth, self-correcting relationship — not just "one hormone affects another," but one that actively pushes back and limits itself.` },
  { s: 'NALEDI', t: `Exactly right, and here's exactly how it plays out in our cycle: progesterone influences the secretion of follicle stimulating hormone. If the ovum is fertilised, the corpus luteum remains active, continuing to secrete progesterone. That increased progesterone in the blood then inhibits the secretion of FSH. As a result, no further follicle development occurs, and ovulation does not take place.` },
  { s: 'MICHAEL', t: `Oh, that's actually a really elegant safety mechanism — if you're already pregnant, high progesterone makes sure your body doesn't also try to mature and release another egg on top of that.` },
  { s: 'NALEDI', t: `[impressed] That is a genuinely excellent way to explain the biological logic behind it — and that exact insight is precisely what a "why is this useful" style exam question is looking for.` },
  { s: 'MICHAEL', t: `Can we run through what the actual graph looks like, reading left to right? I know these hormone-level graphs show up as data questions a lot.` },
  { s: 'NALEDI', t: `Definitely worth doing out loud. From day 1, FSH is present at a moderate level and gently rises through the first week or so, as it's stimulating follicle development. LH stays low initially. Oestrogen climbs steadily from around day 5 or so as the follicle matures, and then — around day 13 to 14 — both oestrogen and LH spike sharply, with LH producing a very sharp, narrow peak right around ovulation on day 14, and FSH also showing a smaller peak around the same time. Immediately after ovulation, oestrogen and LH both drop back down quite quickly. Progesterone, meanwhile, has stayed low the entire first half of the cycle, and only starts rising after ovulation, once the corpus luteum has formed — peaking somewhere around days 20 to 22, then gradually falling again toward day 28 if there's no fertilisation, dragging FSH and LH back up again as it falls.` },
  { s: 'MICHAEL', t: `So if I'm handed a graph like that in an exam and asked "which day did ovulation occur," I should be looking for that sharp LH spike specifically — that's the clearest marker.` },
  { s: 'NALEDI', t: `Exactly — the LH surge is the single most reliable visual marker for pinpointing ovulation on one of these graphs.` },

  // PART 15: Fertilisation and Development of the Zygote to the Blastocyst
  { s: 'NALEDI', t: `Alright — we've now fully covered the cycle. Let's follow what happens if fertilisation does occur, starting right from intercourse.`, newPart: true },
  { s: 'MICHAEL', t: `This connects back to the anatomy from earlier in the episode?` },
  { s: 'NALEDI', t: `Directly. During copulation — sexual intercourse — the penis is inserted into the vagina, and sperm cells are released through ejaculation, close to the cervix. The sperm cells then swim through the cervix, up into the uterus, and onward through the fallopian tubes.` },
  { s: 'MICHAEL', t: `And meanwhile, the egg is already sitting somewhere in that fallopian tube, waiting, if ovulation has already happened?` },
  { s: 'NALEDI', t: `Exactly — the haploid ovum, released during ovulation, enters the fallopian tube. If an ovum is present in the fallopian tube, one sperm cell may penetrate through the jelly layer we described earlier, and fertilise the ovum — resulting in a diploid zygote.` },
  { s: 'MICHAEL', t: `And that penetration is specifically the acrosome doing its job — dissolving through that jelly layer?` },
  { s: 'NALEDI', t: `Exactly, nice callback to the sperm structure section. The nucleus of the ovum and the nucleus of the sperm cell fuse together, and that fusion is what constitutes fertilisation itself.` },
  { s: 'MICHAEL', t: `Okay, and once you've got a zygote, what actually happens to it?` },
  { s: 'NALEDI', t: `The zygote divides by mitosis, as it physically moves down the fallopian tube toward the uterus. Mitosis continues, and a solid ball of cells forms — this is called the morula. The morula then develops into a hollow, fluid-filled ball of cells, called the blastocyst.` },
  { s: 'MICHAEL', t: `Solid ball first — morula — then it hollows out into a fluid-filled ball — blastocyst.` },
  { s: 'NALEDI', t: `Exactly that transition, and here's a useful timeframe to remember: once the ovum is fertilised, it takes approximately 5 days to form the blastocyst. There's also a more granular timeline worth knowing — the 2-cell stage occurs at around 48 hours, the 8-cell stage and morula around 72 hours, and the blastocyst itself forms by around day 4 to 5.` },
  { s: 'MICHAEL', t: `So this whole journey — fertilisation, then dividing all the way to a blastocyst — is happening while it's still travelling down the fallopian tube toward the uterus?` },
  { s: 'NALEDI', t: `Exactly right — by the time it's ready to reach the uterus, it's already gone through several rounds of division.` },

  // PART 16: Implantation and Gestation
  { s: 'NALEDI', t: `Now the blastocyst has to actually settle in — that's implantation. The blastocyst moves from the fallopian tube into the uterus, where it embeds itself into the endometrium — which, remember from earlier, has been building up in thickness across the whole second half of the cycle, specifically in preparation for this moment.`, newPart: true },
  { s: 'MICHAEL', t: `That earlier detail about progesterone thickening the endometrium "just in case" — this is the payoff.` },
  { s: 'NALEDI', t: `Exactly — everything from earlier in the episode is converging right here. Implantation happens as follows. Step one: the outer cells of the blastocyst secrete enzymes, which break down a small portion of the thickened uterine wall, causing it to become softer. Step two: the blastocyst sinks into that softened area, and the outer layers develop into two extra-embryonic membranes — the amnion and the chorion.` },
  { s: 'MICHAEL', t: `Amnion and chorion — those are two of the three membranes from the amniotic egg, from last episode!` },
  { s: 'NALEDI', t: `Exactly right — same structures, same names, carrying straight over from vertebrate reproduction into human development specifically. Step three: the chorion extends finger-like outgrowths called chorionic villi into the endometrium, and these form part of the placenta — which, notably, secretes progesterone.` },
  { s: 'MICHAEL', t: `So the placenta isn't just a passive nutrient pipe, it's also an active hormone-producing organ?` },
  { s: 'NALEDI', t: `Exactly — we'll get to its full list of functions in just a second. And step four: once implantation has happened, the blastocyst is now properly referred to as the embryo.` },
  { s: 'MICHAEL', t: `Blastocyst becomes embryo, right at implantation.` },
  { s: 'NALEDI', t: `Exactly that terminology shift. Now — gestation, also known as pregnancy, is the time during which the embryo develops inside the uterus. Gestation, and the full development of the embryo, lasts for about 40 weeks, or 280 days. And here's another terminology shift worth knowing: after 12 weeks, the embryo is properly referred to as a foetus.` },
  { s: 'MICHAEL', t: `So there are actually three separate names across this whole journey — zygote, then embryo after implantation, then foetus after 12 weeks.` },
  { s: 'NALEDI', t: `Exactly right, and examiners do specifically test that you know which stage each name applies to.` },
  { s: 'MICHAEL', t: `Okay, and the structures supporting the foetus through the rest of gestation — placenta, umbilical cord, amniotic fluid — can we go through those properly now?` },
  { s: 'NALEDI', t: `Absolutely, and this is a great one to visualise as a diagram, since it's commonly tested as a labelling question. The inner membrane, the amnion, becomes filled with amniotic fluid, forming the amniotic sac. That amniotic fluid has several functions: it protects the foetus against mechanical injury, acting as a shock-absorber; it prevents dehydration; it maintains the temperature of the foetus; and it allows for free movement of the foetus as it grows and develops.` },
  { s: 'MICHAEL', t: `Shock-absorber, hydration, temperature control, and freedom of movement. Four jobs for one fluid.` },
  { s: 'NALEDI', t: `Exactly. Now, the umbilical cord attaches the foetus to the placenta, and it contains umbilical blood vessels specifically — two umbilical arteries, which carry deoxygenated blood and waste products from the foetus to the placenta, and one umbilical vein, which carries oxygenated blood, nutrients, water, and other substances from the placenta to the foetus.` },
  { s: 'MICHAEL', t: `Two arteries carrying waste away, one vein carrying supplies in. That's actually the reverse of what I'd have guessed, since I usually think of arteries as carrying oxygenated blood.` },
  { s: 'NALEDI', t: `That's a genuinely common point of confusion, and it's worth sitting with — in the umbilical cord specifically, it's the vein that carries the oxygen-rich blood, because it's travelling from the placenta, where oxygen was just picked up, to the foetus. The arteries are carrying blood away from the foetus, back to the placenta, to drop off waste and pick up more oxygen. Direction of travel matters more than the usual "arteries equal oxygenated" rule of thumb here.` },
  { s: 'MICHAEL', t: `Got it — it's about which direction the blood is travelling, not a fixed rule about arteries versus veins.` },
  { s: 'NALEDI', t: `Exactly right. And finally, the placenta itself — a temporary organ that forms in the area where the blastocyst implants. Its functions: it's the point of attachment of the foetus to the mother; it allows for the diffusion of nutrients from the mother to the foetus; it allows for the diffusion of oxygen from the mother to the foetus, and of carbon dioxide from the foetus to the mother — that's the gas exchange function; it allows for the diffusion of waste products from the foetus to the mother; and after 12 weeks, it secretes progesterone, to maintain the pregnancy.` },
  { s: 'MICHAEL', t: `So the placenta is doing nutrient delivery, gas exchange, waste removal, and hormone production, all at once.` },
  { s: 'NALEDI', t: `Exactly — a genuinely remarkable multi-purpose organ. And one more crucial detail, worth remembering specifically: the placenta allows all of this to happen by diffusion, between the mother and the foetus, without their blood ever actually mixing directly.` },
  { s: 'MICHAEL', t: `So mum's blood and the baby's blood stay completely separate the entire time — it's all exchange across a barrier, not direct mixing?` },
  { s: 'NALEDI', t: `Exactly right — that separation is actually really important, since it protects the foetus from certain things in the mother's bloodstream, while still allowing the essential substances to pass across.` },

  // PART 17: Michael's Full Episode Walkthrough
  { s: 'NALEDI', t: `[warmly] Okay — this has genuinely been our biggest episode yet. Same tradition though — give me the whole thing, start to finish.`, newPart: true },
  { s: 'MICHAEL', t: `Deep breath, here goes. The human life cycle loops between diploid adults, meiosis producing haploid gametes in the testes or ovaries, fertilisation forming a diploid zygote, and mitosis building a new adult. Gametogenesis is the umbrella term — spermatogenesis in males, oogenesis in females, both starting from germinal epithelium. The male reproductive system — testes in the scrotum, epididymis, vas deferens, urethra, plus the prostate, Cowper's glands, and seminal vesicles, and the penis — produces sperm and testosterone; inside the testes, Sertoli cells nourish developing sperm and Leydig cells make testosterone, and the whole system needs to run 2 to 3 degrees cooler than body temperature. Spermatogenesis: diploid cells undergo meiosis under testosterone's influence, each producing four haploid spermatids that mature into sperm with a head — nucleus and acrosome — a mitochondria-rich middle, and a propelling tail. The female system — ovaries, fallopian tubes, uterus and its endometrium, cervix, vagina, vulva — produces ova plus oestrogen and progesterone, with fertilisation actually occurring in the fallopian tube. Oogenesis: diploid cells undergo mitosis to form many follicles, FSH activates one every 28 days, that cell undergoes meiosis, and only one of the four resulting cells survives as a mature ovum, structured with follicle cells, jelly, cytoplasm, and a haploid nucleus. Puberty is triggered by testosterone in males and oestrogen plus progesterone in females, driving all the secondary sexual characteristics. The menstrual cycle runs the ovarian and uterine cycles together over 28 days — FSH matures a follicle into a Graafian follicle, which secretes oestrogen, which triggers an LH surge, causing ovulation around day 14; the ruptured follicle becomes the corpus luteum, secreting progesterone, which thickens the endometrium further and inhibits FSH and LH via negative feedback; without fertilisation, the corpus luteum breaks down, progesterone falls, and menstruation follows, restarting the cycle; with fertilisation, the corpus luteum persists. Fertilisation itself happens when a sperm's acrosome breaks through the ovum's jelly layer and the two nuclei fuse into a diploid zygote, which divides by mitosis into a morula, then a hollow blastocyst by about day five. Implantation happens when the blastocyst embeds into the endometrium, forms the amnion and chorion, and becomes an embryo — after twelve weeks, it's called a foetus. Gestation lasts about forty weeks, supported by amniotic fluid for cushioning, temperature control, and movement; the umbilical cord, with two arteries carrying waste away and one vein carrying oxygen and nutrients in; and the placenta, which handles nutrient and gas exchange and waste removal by diffusion, and secretes progesterone after twelve weeks — all without the mother's and foetus's blood ever actually mixing.` },
  { s: 'NALEDI', t: `[very impressed] Michael... that might be the single best full-episode recap you've ever given on this show. Every system, every hormone, every stage, in the correct order.` },
  { s: 'MICHAEL', t: `[laughs] I think building it as "male side, then female side, then how they meet in the middle" is what made it actually stick this time, instead of feeling like a giant pile of disconnected facts.` },
  { s: 'NALEDI', t: `[warmly] That's exactly the right instinct — nearly everything in this chapter is really just one continuous story, told from two different starting points.` },

  // OUTRO: Wrapping It Up
  { s: 'NALEDI', t: `[warmly] That's a wrap on human reproduction — genuinely one of the densest chapters we've done on Life, Decoded so far, but also one where every single piece connects to the next. Structures, hormones, cycles, development — it's really one long thread.`, newPart: true },
  { s: 'MICHAEL', t: `I actually feel like I understand why the body does all this now, not just the vocabulary list.` },
  { s: 'NALEDI', t: `That's exactly the goal. Until next time — keep those hormone loops straight, FSH, oestrogen, LH, progesterone, and we'll catch you in the next episode.` },
];

// ─────────────────────────────────────────────────────────────────────────

function stripTags(text) {
  return text.replace(/\[[a-zA-Z ]+\]\s*/g, '').trim();
}

function pad(n, len = 4) { return String(n).padStart(len, '0'); }

function requestTTS(text, voiceId, modelId) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_KEY,
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`${res.statusCode}: ${Buffer.concat(chunks)}`));
        } else {
          resolve(Buffer.concat(chunks));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function generateAudio(text, voiceId, outputPath) {
  try {
    const buf = await requestTTS(text, voiceId, PRIMARY_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'v3';
  } catch (e) {
    console.warn(`  ! ${PRIMARY_MODEL} failed (${e.message.slice(0, 120)}) — retrying with ${FALLBACK_MODEL}`);
    const buf = await requestTTS(stripTags(text), voiceId, FALLBACK_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'fallback';
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function hasFfmpeg() {
  try { execSync('ffmpeg -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

async function main() {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });

  console.log(`\nHuman Reproduction Chapter 4 Podcast — ${S.length} segments — model: ${PRIMARY_MODEL}\n`);

  const files = [];
  let usedFallback = 0;
  for (let i = 0; i < S.length; i++) {
    const seg = S[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(TMP_DIR, fname);
    files.push({ path: outPath, newPart: !!seg.newPart });

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      console.log(`[${pad(i)}] ${seg.s} — already exists, skipping`);
      continue;
    }

    console.log(`[${pad(i)}] ${seg.s}: ${seg.t.slice(0, 60)}${seg.t.length > 60 ? '...' : ''}`);
    try {
      const mode = await generateAudio(seg.t, voiceId, outPath);
      if (mode === 'fallback') usedFallback++;
    } catch (e) {
      console.error(`  ✗ FAILED: ${e.message.slice(0, 200)}`);
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f.path) || fs.statSync(f.path).size === 0);
  if (missing.length) {
    console.warn(`\n⚠ ${missing.length} segment(s) failed to generate. Re-run this script to retry just those — it skips ones that already succeeded.`);
  }
  if (usedFallback) {
    console.warn(`⚠ ${usedFallback} segment(s) used the ${FALLBACK_MODEL} fallback instead of ${PRIMARY_MODEL} (no v3 audio-tag delivery) — you asked for v3 specifically on this episode, so it's worth checking your ElevenLabs plan has v3 API access, then re-running to regenerate just those lines.`);
  } else {
    console.log(`\n✅ All segments generated on ${PRIMARY_MODEL} — no fallback needed.`);
  }

  console.log(`\nStitching ${files.length} clips into the final episode...`);

  if (hasFfmpeg()) {
    const silenceShort = path.join(TMP_DIR, '_silence_short.mp3');
    const silenceLong = path.join(TMP_DIR, '_silence_long.mp3');
    if (!fs.existsSync(silenceShort)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.35 -q:a 9 "${silenceShort}"`, { stdio: 'ignore' });
    }
    if (!fs.existsSync(silenceLong)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.9 -q:a 9 "${silenceLong}"`, { stdio: 'ignore' });
    }

    const listPath = path.join(TMP_DIR, '_concat_list.txt');
    const lines = [];
    for (const f of files) {
      if (f.newPart) lines.push(`file '${silenceLong.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${f.path.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${(f.newPart ? silenceLong : silenceShort).replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));

    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${OUT_FILE}"`, { stdio: 'inherit' });
    console.log(`\n✅ Done (ffmpeg): ${OUT_FILE}`);
  } else {
    console.warn('\n⚠ ffmpeg not found — falling back to raw concatenation (no pauses between lines).');
    console.warn('  For a cleaner result, install ffmpeg and re-run this script.');
    const out = fs.createWriteStream(OUT_FILE);
    for (const f of files) {
      if (fs.existsSync(f.path)) out.write(fs.readFileSync(f.path));
    }
    out.end();
    console.log(`\n✅ Done (raw concat): ${OUT_FILE}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
