const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
// const validExts = ['.png', '.jpg', '.jpeg'];
// const folders = ['./public'];
// const files = [];

// async function generate() {
//   for (let folder of folders) {
//     for (let file of fs.readdirSync(folder, { withFileTypes: true })) {
//       if (file.isDirectory()) {
//         folders.push(path.join(file.path, file.name));
//       } else {
//         const ext = path.extname(file.name).toLowerCase();
//         if (validExts.includes(ext)) {
//           files.push(file);
//         }
//       }
//     }
//   }

//   for (let file of files) {
//     const url = path.join(file.path, file.name);
//     const ext = path.extname(file.name);
//     const promises = deviceSizes.map(size => sharp(url)
//       .resize({ width: size })
//       .toFile(path.join(file.path, file.name.replace(ext, `-${size}${ext}`))));
//     const results = await Promise.allSettled(promises);

//     results.forEach(console.log);
//   }
// }

// generate().then(() => console.log('all good')).catch(console.log);


async function test() {
  const url = 'public/compare/download.png';
  const ext = path.extname('download.png');
  const promises = deviceSizes.map(size => sharp(url)
    .resize({ width: size })
    .toFile(path.join('public/compare', 'download.png'.replace(ext, `-${size}.jpg`))));
  const results = await Promise.allSettled(promises);

  results.forEach(console.log);
}

test().then(() => console.log('all good')).catch(console.log);