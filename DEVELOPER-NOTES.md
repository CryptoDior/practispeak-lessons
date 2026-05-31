# Practispeak Developer Notes

## Lessons Learned — Common Build Errors

### 1. Always run `npm run build` before pushing
Vercel runs this exact command. If it fails locally, it'll fail on Vercel.
Never push without running a build check first.
The generator script now does this automatically.

### 2. Apostrophes in lesson text break TypeScript
Text like `Let's go!` or `don't` inside single-quoted strings causes a syntax error.
**Fix:** The generator script now auto-detects apostrophes and uses double quotes.
Always check dialogue and example sentences for apostrophes.

### 3. `PartOfSpeech` type must be extended for new word types
Allowed values are in `types/lesson.ts`. If a lesson uses a new part of speech
(e.g. `abbreviation`, `exclamation`), add it to the union type first.
Current allowed values: noun, verb, adjective, adverb, phrasal verb, abbreviation, exclamation, phrase, preposition, pronoun, conjunction.

### 4. TypeScript spread operator on iterators
`[...someMap.entries()]` causes a build error. Always use `Array.from()` instead.
Example: `Array.from(new Map(...).entries())`

### 5. Git lock files on Windows
If git commands fail with "lock file exists", delete them manually:
`del .git\index.lock` and `del .git\config.lock`

---

## Workflow Summary

1. Paste lesson PDF into Cowork
2. Cowork creates `scripts/lesson-specs/<slug>.json`
3. Run in Node.js command prompt:
   `node --env-file=.env.local scripts/generate-lesson-assets.mjs <slug>`
4. Script generates images (gpt-image-1), audio (ElevenLabs), lesson .ts file,
   runs build check, then pushes to GitHub
5. Vercel auto-deploys

## API Keys Location
Stored in `.env.local` (gitignored — never commit this file)
