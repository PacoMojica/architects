const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const validExts = ['.png', '.jpg', '.jpeg'];
const folders = ['./public'];
const files = [];

async function generate() {
  for (let folder of folders) {
    for (let file of fs.readdirSync(folder, { withFileTypes: true })) {
      if (file.isDirectory()) {
        folders.push(path.join(file.path, file.name));
      } else {
        const ext = path.extname(file.name).toLowerCase();
        if (validExts.includes(ext)) {
          files.push(file);
        }
      }
    }
  }

  for (let file of files) {
    if (
      file.name.includes('-blur') ||
      deviceSizes.some(size => file.name.includes(`-${size}`))
    ) continue;

    const url = path.join(file.path, file.name);
    const rawExt = path.extname(file.name);
    const ext = rawExt.includes('png') ? '.jpg' : rawExt;
    const outName = path.join(file.path, file.name.replace(rawExt, `-blur${ext}`));

    try {
      const result = await sharp(url)
        .blur(1)
        .resize({ width: 10 })
        .toFile(outName);

      console.log(result);
    } catch (e) {
      console.log(file);
      console.log(outName);
      throw e;
    }
  }
}

generate().then(() => console.log('all good')).catch(console.log);
