/**
 * Practispeak Avatar Generator
 * -----------------------------
 * Usage: node scripts/generate-avatars.mjs <lesson-slug>
 *
 * Reads the lesson spec and generates a circular avatar image for each
 * unique dialogue speaker, saving to public/images/<speaker-lowercase>-icon.png
 */

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) throw new Error('Missing OPENAI_API_KEY');

const openai = new OpenAI({ apiKey: OPENAI_KEY });

const ROOT = path.resolve('.');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const SPECS_DIR  = path.join(ROOT, 'scripts', 'lesson-specs');

const lessonSlug = process.argv[2];
if (!lessonSlug) {
  console.error('Usage: node scripts/generate-avatars.mjs <lesson-slug>');
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(path.join(SPECS_DIR, `${lessonSlug}.json`), 'utf8'));
const imageStyle = spec.imageStyle || '';

// Get unique speakers from dialogue
const speakers = [...new Set(spec.dialogue.map(l => l.speaker))];

console.log(`\n🎭 Generating avatars for: ${speakers.join(', ')}\n`);

for (const speaker of speakers) {
  const outputPath = path.join(IMAGES_DIR, `${speaker.toLowerCase()}-icon.png`);

  if (fs.existsSync(outputPath)) {
    console.log(`   Skipping ${speaker} — avatar already exists`);
    continue;
  }

  // Find any avatar prompt defined in the spec
  const avatarPrompt = spec.avatars?.[speaker] ||
    `A close-up portrait of a young gamer named ${speaker}, looking engaged and friendly, circular headshot style, gaming environment background`;

  const fullPrompt = imageStyle
    ? `${avatarPrompt}. Style: ${imageStyle}`
    : avatarPrompt;

  console.log(`   Generating avatar: ${speaker.toLowerCase()}-icon.png`);

  const response = await openai.responses.create({
    model: 'gpt-4o',
    input: fullPrompt,
    tools: [{ type: 'image_generation', model: 'gpt-image-1', size: '1024x1024', quality: 'medium' }],
  });
  const imageCall = response.output.find(o => o.type === 'image_generation_call');
  if (!imageCall?.result) throw new Error(`No image result for ${speaker}`);
  fs.writeFileSync(outputPath, Buffer.from(imageCall.result, 'base64'));
  console.log(`   ✅ Saved ${speaker.toLowerCase()}-icon.png`);
}

console.log('\n✅ All avatars generated!\n');
