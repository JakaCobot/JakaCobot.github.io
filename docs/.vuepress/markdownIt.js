const MarkdownIt = require('markdown-it')
const markdownItLozad = require('markdown-it-lozad')

module.exports = {
  extendMarkdown: (md) => {
    md.use(markdownItLozad)
  },
}
