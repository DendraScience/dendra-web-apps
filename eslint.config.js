import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginQuery from '@tanstack/eslint-plugin-query'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  { ignores: ['**/coverage', '**/dist'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginQuery.configs['flat/recommended'],
      ...eslintPluginVue.configs['flat/recommended']
    ],
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['+Page']
        }
      ],
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true
        }
      ]
    }
  },
  eslintConfigPrettier
)
