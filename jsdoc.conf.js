module.exports = {
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc'], // closure
  },
  plugins: ['plugins/markdown', 'node_modules/jsdoc-tsimport-plugin/index.js'],
  templates: {
    default: {
      outputSourceFiles: false,
      staticFiles: {
        include: ['./jsdoc.assets/static'],
      },
      layoutFile: './jsdoc.assets/tmpl/layout.tmpl',
    },
  },
  source: {
    include: ['src'],
    includePattern: '.+\\.jsx?$',
    excludePattern: '(^|\\/|\\\\)_',
  },
  opts: {
    recurse: true,
  },
};
