const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Path to folder to zip - one level up then into public
const folderToZip = path.join(__dirname, '..', 'public'); 

// Output zip file path - you can save it inside Q4 or anywhere else you want
const outputZip = path.join(__dirname, 'public.zip'); 

const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`Archive created successfully, total bytes: ${archive.pointer()}`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(folderToZip, false);

archive.finalize();
