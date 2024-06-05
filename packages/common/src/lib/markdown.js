// @ts-nocheck
/**
 * Based on the following:
 *  - https://markdown-it.github.io/markdown-it/
 *  - https://github.com/strapi/strapi/blob/master/packages/strapi-plugin-content-manager/admin/src/components/PreviewWysiwyg/utils/mdRenderer.js
 */

import markdownit from 'markdown-it'
// import 'highlight.js/styles/solarized-dark.css';
import hljs from 'highlight.js'
import abbr from 'markdown-it-abbr'
import container from 'markdown-it-container'
import deflist from 'markdown-it-deflist'
import { light as emoji } from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
import ins from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'

export const md = markdownit({
  html: false, // Enable HTML tags in source
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',

  // Code from: https://github.com/markdown-it/markdown-it/blob/master/support/demo_template/index.js#L83
  highlight: (str, lang) => {
    if (lang && lang !== 'auto' && hljs.getLanguage(lang)) {
      return (
        '<pre class="hljs language-' +
        md.utils.escapeHtml(lang.toLowerCase()) +
        '"><code>' +
        hljs.highlight(lang, str, true).value +
        '</code></pre>'
      )
    }

    if (lang === 'auto') {
      const result = hljs.highlightAuto(str)

      return (
        '<pre class="hljs language-' +
        md.utils.escapeHtml(result.language) +
        '"><code>' +
        result.value +
        '</code></pre>'
      )
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  }
})
  .use(abbr)
  .use(container, 'warning')
  .use(container, 'tip')
  .use(deflist)
  .use(emoji)
  .use(footnote)
  .use(ins)
  .use(mark)
  .use(sub)
  .use(sup)

// Code from: https://github.com/markdown-it/markdown-it-footnote/blob/master/index.js#L29
md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf)

  return '<sup class="footnote-ref"><span>' + caption + '</span></sup>'
}

md.renderer.rules.footnote_anchor = () => {
  /* ↩ with escape code to prevent display as Apple Emoji on iOS */
  return ' <span class="footnote-backref">\u21a9\uFE0E</span>'
}

// md.renderer.rules.paragraph_open = function () {
//   return '<p class="mb-4">'
// }
