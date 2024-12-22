import 'dotenv/config'
import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import lightningcss from 'vite-plugin-lightningcss'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import { pkgName } from './build-utils.js'

const envConfig = process.env.NODE_ENV === 'production' ? {} : {}
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const plugins = [
	lightningcss({
		browserslist: '>= 0.25%'
	}),
	vue(),
	vueDevTools(),
	Components({
		dirs: [
			'../../packages/common/src/components',
			'src/components',
			'src/layouts',
			'src/views'
		],
		resolvers: [Vuetify3Resolver()]
	}),
	checker({
		eslint: {
			lintCommand: 'eslint "./**/*.{js,ts,tsx,vue}"',
			useFlatConfig: true
		},
		vueTsc: { tsconfigPath: 'tsconfig.app.json' }
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

	resolve: {
		alias: {
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
		host: host === 'true' ? true : host,
		port
	},

	...envConfig
})
