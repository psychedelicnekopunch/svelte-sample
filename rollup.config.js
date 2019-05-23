import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

// import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';

// Sass
import preprocess from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js',
		// globals: {
		// 	'request': 'Request',
		// 	'axios': 'Axios',
		// },
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			},
			// Sass
			preprocess: preprocess({
				scss: true,
			}),
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			// some package.json files have a "browser" field which specifies
			// alternative files to load for people bundling for the browser. If
			// that's you, either use this option or add "browser" to the
			// "mainfields" option, otherwise pkg.browser will be ignored
			browser: true,  // Default: false
		}),
		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		// babel({
		// 	exclude: 'node_modules/**',
		// }),

		builtins(),
		globals(),
		json(),
	],
	external: [
		// 'request',
		// 'axios',
	],

};
