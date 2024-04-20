const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


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
    // if (file.name.includes('-blur')) continue;
    if (file.name.includes('-blur')) {
      console.log('asdf')
      fs.unlinkSync(path.join(file.path, file.name));
    };

    // const url = path.join(file.path, file.name);
    // const rawExt = path.extname(file.name);
    // const ext = rawExt.includes('png') ? '.jpg' : rawExt;
    // const outName = path.join(file.path, file.name.replace(rawExt, `-blur${ext}`));

    // try {
    //   const result = await sharp(url)
    //     .blur(10)
    //     .resize({ width: 640 })
    //     .toFile(outName);

    //   console.log(result);
    // } catch (e) {
    //   console.log(file);
    //   console.log(outName);
    //   throw e;
    // }
  }
}

generate().then(() => console.log('all good')).catch(console.log);
