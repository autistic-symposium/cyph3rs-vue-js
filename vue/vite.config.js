import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import nodeStdlibBrowser from 'node-stdlib-browser'

export default defineConfig({
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
		alias: { ...nodeStdlibBrowser },
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
  