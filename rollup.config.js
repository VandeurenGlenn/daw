import cleanup from 'rollup-plugin-cleanup';
import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import del from 'del';

del.sync('www/chunk-*')
del.sync('chunk-*')
export default [{
  input: ['src/main.js'],
  output: {
  	experimentalCodeSplitting: true,
    treeshake: true,
    dir: './',
    format: 'cjs'
  },
  plugins: [
    json(),
    cleanup()
  ]
}, {
  input: ['src/www/shell.js', 'src/www/file-browser.js', 'src/www/animations/syncing.js'],
  output: {
  	experimentalCodeSplitting: true,
    treeshake: true,
    dir: 'www',
    format: 'es'
  },
	plugins: [
    cleanup(),
    json(),
    cjs(),
    resolve()
  ]
}]
