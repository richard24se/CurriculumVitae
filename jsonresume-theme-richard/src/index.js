import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Resume from './Resume.jsx';
import { getLanguage, setLanguageFromMeta } from './i18n.js';

export function render(resume) {
  // Detect language from resume.meta.language (e.g., {"meta": {"language": "es"}})
  setLanguageFromMeta(resume);

  const sheet = new ServerStyleSheet();
  const lang = getLanguage();

  try {
    const html = renderToString(
      sheet.collectStyles(<Resume resume={resume} />)
    );
    const styles = sheet.getStyleTags();

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resume.basics?.name || 'Resume'} - CV</title>
  ${styles}
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.5in;
      }
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
  } finally {
    sheet.seal();
  }
}
