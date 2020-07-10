import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [{
  input: 'index.js',
  output: {
    name: "msg91",
    file: pkg.browser,
    format: 'iife',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    resolve({ preferBuiltins: true, mainFields: ['browser'] }),
    nodePolyfills(),
    commonjs(),
    minify({ comments: false }),
  ],
}];