const fs = require('fs');
const util = require('util');

// Promisify the unlink function
const unlinkAsync = util.promisify(fs.unlink);

// File to delete (update path accordingly)
const filePath = './testfile.txt';  // Replace with your actual file path

// Using async/await
async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file '${filePath}':`, err.message);
  }
}

deleteFile();
