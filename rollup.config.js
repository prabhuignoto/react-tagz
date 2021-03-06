import babel from "@rollup/plugin-babel";
import buble from "@rollup/plugin-buble";
import common from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss"
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export default {
  input: 'src/react-tagz.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      strict: true,
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      strict: true,
      banner,
    },
    {
      file: pkg.umd,
      format: 'umd',
      exports: 'named',
      strict: true,
      banner,
      name: 'ReactTagz',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    postcss({
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    }),
    typescript(),
    babel({
      extensions: ['tsx', 'ts'],
      babelHelpers: 'runtime',
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-optional-chaining'
      ],
      presets: ['@babel/preset-react'],
    }),
    buble({
      objectAssign: true,
      transforms: {
        templateString: false,
      },
    }),
    common(),
    resolve(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false
      }
    }),
  ],
  external: ['react', 'react-dom', '@babel/runtime'],
};
