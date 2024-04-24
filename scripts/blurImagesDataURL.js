const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const validExts = ['.png', '.jpg', '.jpeg'];
const folders = ['./public'];
const files = [];

function base64Encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

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
    if (!file.name.includes('-blur')) continue;

    const url = path.join(file.path, file.name);
    const data = base64Encode(url);

    console.log(`'${url}': 'data:image/png;base64,${data}',`);
  }
}

generate().then(() => console.log('all good')).catch(console.log);
