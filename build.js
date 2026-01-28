require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: [
    function(filepath) {
      if (filepath.includes('node_modules')) {
         // Don't ignore this specific package
         if (filepath.includes('jsonresume-theme-consultant-polished')) {
           return false;
         }
         return true; // Ignore other node_modules
      }
      return false; // Transpile local files
    }
  ],
  extensions: ['.js', '.jsx']
});
const fs = require('node:fs');
const resume = require('./resume.json');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Try to load the theme
let theme;
try {
  theme = require('@jsonresume/jsonresume-theme-consultant-polished');
} catch (e) {
  console.error("Failed to load theme:", e);
  process.exit(1);
}

// Render function
let html = '';
try {
  if (typeof theme.render === 'function') {
    // Standard jsonresume render
    html = theme.render(resume);
  } else if (theme.default && typeof theme.default === 'function') {
    // React component (ESM/Babel default export)
    const Component = theme.default;
    html = ReactDOMServer.renderToStaticMarkup(React.createElement(Component, { resume: resume }));
  } else if (typeof theme === 'function') {
    // React component (CJS export)
    html = ReactDOMServer.renderToStaticMarkup(React.createElement(theme, { resume: resume }));
  } else {
    console.error("Unknown theme export format. keys:", Object.keys(theme));
    process.exit(1);
  }

  // Prep HTML
  if (!html.toLowerCase().trim().startsWith('<!doctype html>')) {
      html = '<!doctype html>' + html;
  }
  
  fs.writeFileSync('resume.html', html);
  console.log('Successfully generated resume.html');
  
} catch (renderError) {
  console.error("Error during rendering:", renderError);
  process.exit(1);
}
