const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.adapter.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  loader: { '.js': 'jsx' },
  jsx: 'transform',
  target: ['node14'],
  logLevel: 'info',
}).catch(() => process.exit(1));
