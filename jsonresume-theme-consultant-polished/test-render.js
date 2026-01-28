const theme = require('./dist/index.js');
const resume = require('../resume.json');

try {
  console.log('Testing theme render...');
  const html = theme.render(resume);
  if (typeof html !== 'string' || !html.startsWith('<!doctype html>')) {
    throw new Error('Theme did not return a valid HTML string');
  }
  console.log('SUCCESS: Theme rendered valid HTML length:', html.length);
  // console.log(html.substring(0, 500)); // Preview
} catch (err) {
  console.error('FAILED: Theme threw an error during render');
  console.error(err);
  process.exit(1);
}
