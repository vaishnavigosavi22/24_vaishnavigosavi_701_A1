const fs = require('fs');
const path = './example.txt';

// 1. Write a file
fs.writeFile(path, 'Hello, this is Q9 example!', (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log('File written successfully.');

  // 2. Read the file
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('File content:', data);

    // 3. Append some text to the file
    fs.appendFile(path, '\nAppended some more text.', (err) => {
      if (err) return console.error('Error appending file:', err);
      console.log('Text appended successfully.');

      // 4. Rename the file
      fs.rename(path, './renamed_example.txt', (err) => {
        if (err) return console.error('Error renaming file:', err);
        console.log('File renamed.');

        // 5. Delete the file
        fs.unlink('./renamed_example.txt', (err) => {
          if (err) return console.error('Error deleting file:', err);
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
