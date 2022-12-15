import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import nodeStdlibBrowser from 'node-stdlib-browser'

export default defineConfig({
	define: {
		'process.env': process.env
	  },
	plugins: [
		vue(),
		{
			...inject({
				global: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'global'],
				process: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'process'],
				Buffer: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'Buffer'],
			}),
			enforce: 'post',
		},
	],
	resolve: {
		alias: {
			...nodeStdlibBrowser, 
			find: /^~.+/,
			replacement: (val) => {return val.replace(/^~/, "");},
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'esnext', 
		},
	},
	build: {
		target: 'esnext',
		commonjsOptions: {
			transformMixedEsModules: true, 
		},
	},
})
  