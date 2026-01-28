import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Resume from './ui/Resume';

export const render = (resumeJson) => {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(<Resume resume={resumeJson} />));
    const styleTags = sheet.getStyleTags();

    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${resumeJson.basics?.name || 'Resume'}</title>
    <style>
      body { 
        margin: 0; 
        padding: 0; 
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      }
    </style>
    ${styleTags}
  </head>
  <body>
    ${html}
  </body>
</html>`;
  } catch (error) {
    console.error('Error rendering resume:', error);
    throw error;
  } finally {
    sheet.seal();
  }
};
