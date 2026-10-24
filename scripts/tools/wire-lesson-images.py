# Connect a folder of lesson images to the lesson files.
# The folder must contain one sub-folder per lesson + a "Lesson Records" folder with *image-index.json files
# (label -> filename). For each word/phrase it sets imageSlug to the R2 URL (or the img('...') name).
#
# Run from the project root:
#   python scripts/tools/wire-lesson-images.py "C:\Users\...\PracticeSpeak Lesson Images\A1-A2 Sales Images"
#   python scripts/tools/wire-lesson-images.py "<base folder>" "Lesson Folder Name" "Another Lesson Folder"   (only these)
# Then upload each lesson folder with scripts/upload-people-portraits.mjs and push.
import re, os, json, glob, sys

BASE = sys.argv[1]
only = sys.argv[2:]
R2 = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/'
LD = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'data', 'lessons') + os.sep


def norm(x):
    return re.sub(r'[^a-z0-9]', '', x.replace("\\'", "'").lower())


idx = {}
for f in sorted(glob.glob(os.path.join(BASE, 'Lesson Records', '*image-index.json')), key=os.path.getmtime):
    for e in json.load(open(f, encoding='utf-8')):
        idx.setdefault(e['folder'], {})[norm(e['label'])] = e

titles = {}
for f in glob.glob(LD + '*.ts'):
    m = re.search(r"\n\s*title:\s*['\"]((?:[^'\"\\]|\\.)*)['\"]", open(f, encoding='utf-8').read())
    if m:
        titles.setdefault(norm(m.group(1)), []).append(f)

for fd in sorted(os.listdir(BASE)):
    if fd == 'Lesson Records' or fd.startswith('Previous') or not os.path.isdir(os.path.join(BASE, fd)):
        continue
    if only and fd not in only:
        continue
    files = set(os.listdir(os.path.join(BASE, fd)))
    ents = idx.get(fd, {})
    lesson = None
    for e in ents.values():
        if os.path.exists(LD + e['lesson'] + '.ts'):
            lesson = LD + e['lesson'] + '.ts'
            break
    if not lesson and norm(fd) in titles and len(titles[norm(fd)]) == 1:
        lesson = titles[norm(fd)][0]
    if not lesson:
        print('?? NO LESSON for', fd, len(files))
        continue
    t = open(lesson, encoding='utf-8').read()
    slug = os.path.basename(lesson)[:-3]
    imgdef = re.search(r"const img = \(s: string\) => `\$\{R2\}([a-z0-9-]+)-\$\{s\}\.png`", t)
    done, miss = [], []

    def rep(m):
        label = m.group(2) or m.group(3)
        body = m.group(0)
        e = ents.get(norm(label))
        if not e or e['filename'] not in files:
            miss.append(label)
            return body
        fn = e['filename']
        im = re.search(r"img\('([^']*)'\)", body)
        if im and imgdef and fn.startswith(imgdef.group(1) + '-'):
            done.append(label)
            return body.replace(im.group(0), f"img('{fn[len(imgdef.group(1)) + 1:-4]}')")
        sl = re.search(r"imageSlug:\s*(?:'[^']*'|`[^`]*`|img\('[^']*'\))", body)
        if not sl:
            miss.append(label + ' (no imageSlug)')
            return body
        done.append(label)
        return body.replace(sl.group(0), f"imageSlug: '{R2}{fn}'")

    t2 = re.sub(r"(word|phrase):\s*(?:'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\")(?:(?!\n\s*(?:word|phrase):)[\s\S])*?imageSlug:\s*(?:'[^']*'|`[^`]*`|img\('[^']*'\))", rep, t)
    open(lesson, 'w', encoding='utf-8', newline='').write(t2)
    print(f"== {fd} -> {slug}: {len(done)} wired, files={len(files)}" + (f"  MISSING {miss}" if miss else ''))
