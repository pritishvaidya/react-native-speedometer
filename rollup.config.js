/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import sourceMaps from 'rollup-plugin-sourcemaps';
import pkg from './package.json';

const propTypeIgnore = { "import PropTypes from 'prop-types';": "'';" };

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
};

const esm = {
  format: 'esm',
  sourcemap: true,
};

const getCJS = override => ({ ...cjs, ...override });
const getESM = override => ({ ...esm, ...override });

const commonPlugins = [
  sourceMaps(),
  json(),
  nodeResolve({
    browser: true,
  }),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    presets: [['@babel/env', { loose: true, modules: false }], '@babel/react'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }),
  commonjs({
    namedExports: {
      'react-native': ['View', 'Image', 'Animated', 'Easing', 'Text'],
      'react-is': ['isElement', 'isValidElementType', 'ForwardRef'],
    },
  }),
  replace({
    __VERSION__: JSON.stringify(pkg.version),
  }),
];

const prodPlugins = [
  replace({
    ...propTypeIgnore,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser({
    sourcemap: true,
  }),
];

const configBase = {
  input: './src/index.js',

  // \0 is rollup convention for generated in memory modules
  external: id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
  plugins: commonPlugins,
};

const globals = {
  react: 'React', 'react-native': 'reactNative', 'prop-types': 'PropTypes',
};

const standaloneBaseConfig = {
  ...configBase,
  input: './src/index.js',
  output: {
    file: 'dist/react-native-speedometer.js',
    format: 'umd',
    globals,
    name: 'speedometer',
    sourcemap: true,
  },
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
    }),
  ),
};

const standaloneConfig = {
  ...standaloneBaseConfig,
  plugins: standaloneBaseConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ),
};

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  output: {
    ...standaloneBaseConfig.output,
    file: 'dist/react-native-speedometer.min.js',
  },
  plugins: standaloneBaseConfig.plugins.concat(prodPlugins),
};

const nativeConfig = {
  ...configBase,
  input: './src/index.js',
  output: [
    getCJS({
      file: 'dist/react-native-speedometer.cjs.js',
    }),
    getESM({
      file: 'dist/react-native-speedometer.esm.js',
    }),
  ],
};

export default [
  standaloneConfig,
  standaloneProdConfig,
  nativeConfig,
];
