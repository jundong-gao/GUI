/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 2:53 PM
 */
import vuePlugin from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const NAME = 'GUI'


import pkg from './package.json'
const createBanner = () => {
  return `
/**
 * ${pkg.name}  v${pkg.version}
 * (c) ${new Date().getFullYear()} 高俊东
 * @license MIT
 */
  `
}


const createBaseConfig = () => {
  return {
    input: './src/entry.js',
    external: ['vue'],
    plugins: [
      nodePolyfills(),
      peerDepsExternal(),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.vue', '.jsx']
      }),
      json(),
      vuePlugin({
        css: true
      }),
      scss()
    ],
    output: {
      extend: true,
      sourcemap: false,
      banner: createBanner(),
      externalLiveBindings: false,
      globals: {
        vue: 'Vue'
      }
    }
  }
}



const mergeConfig = (baseConfig, configB) => {
  const config = Object.assign({}, baseConfig)
  if(configB.plugins){
    baseConfig.plugins.push(...configB.plugins)
  }
  config.output = Object.assign({}, baseConfig.output, configB.output)
  return config
}


const createFileName = formatName => {
  return `dist/gui.${formatName}.js`
}

const esBundleConfig = {
  plugins: [],
  output: {
    file: createFileName('esm-bundle'),
    format: 'es'
  }
}


const esBrowserConfig = {
  plugins: [],
  output: {
    file: createFileName('es-browser'),
    format: 'es'
  }
}


const esBrowserProdConfig = {
  plugins: [
    terser()
  ],
  output: {
    file: createFileName('es-browser.prod'),
    format: 'es'
  }
}

const cjsConfig = {
  plugins: [],
  output: {
    file: createFileName('cjs'),
    format: 'cjs'
  }
}

const cjsProdConfig = {
  plugins: [
    terser()
  ],
  output: {
    file: createFileName('cjs.prod'),
    format: 'cjs'
  }
}

const globalConfig = {
  plugins: [],
  output: {
    file: createFileName('global'),
    format: 'iife',
    name: NAME
  }
}

const globalProdConfig = {
  plugins: [
    terser()
  ],
  output: {
    file: createFileName('global.prod'),
    format: 'iife',
    name: NAME
  }
}


const formatConfigs = [
  esBundleConfig,
  esBrowserConfig,
  esBrowserProdConfig,
  cjsConfig,
  cjsProdConfig,
  globalConfig,
  globalProdConfig
]


const createPackageConfigs = () => {
  return formatConfigs.map(formatConfig => {
    return mergeConfig(createBaseConfig(), formatConfig)
  })
}



export default createPackageConfigs()
