const fs = require('fs');
const path = require('path');

const startPath = 'node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui';

try {
  const files = fs.readdirSync(startPath);
  console.log('Files in ' + startPath + ':');
  files.forEach(file => {
    console.log(file);
  });
} catch (e) {
  console.error("Error reading dir:", e.message);
}
