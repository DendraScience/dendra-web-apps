import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
// https://vite-plugin-checker.netlify.app
import checker from 'vite-plugin-checker'
// https://lightningcss.dev/docs.html#with-vite
import lightningcss from 'vite-plugin-lightningcss'
// https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme
import vue from '@vitejs/plugin-vue'
// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
// https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import { pkgName } from './build-utils.js'

const envConfig = process.env.NODE_ENV === 'production' ? {} : {}
const port = process.env.PORT || 3000

const plugins = [
	lightningcss({
		browserslist: '>= 0.25%'
	}),
	vue(),
	vuetify({
		autoImport: true
		// styles: { configFile: 'src/settings.scss' }
	}),
	Components({
		resolvers: [Vuetify3Resolver()]
	}),
	checker({
		eslint: {
			lintCommand: 'eslint "./**/*.{js,ts,tsx,vue}"'
		},
		vueTsc: { root: '../../' }
	})
]

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		assetsInlineLimit: 256,
		emptyOutDir: true,
		outDir: `../../output/${pkgName}/dist`
	},

	define: {
		'import.meta.env.GIT_COMMIT_SHA': JSON.stringify(process.env.GIT_COMMIT_SHA)
	},

	plugins,

	publicDir: `../../branding/${pkgName}/public`,

	resolve: {
		alias: {
			'#branding': path.resolve(`../../branding/${pkgName}`),
			'#common': path.resolve('../../packages/common/src'),
			'#root': path.resolve('./src')
		}
	},

	server: {
		fs: {
			allow: [`../..`]
		},
		hmr: {
			port: +port + 10
		},
		port
	},

	...envConfig
})
