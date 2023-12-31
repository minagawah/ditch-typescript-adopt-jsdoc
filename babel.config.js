module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
        corejs: 3,
        targets: {
          esmodules: true,
        },
        debug: false,
      },
    ],
    '@babel/preset-react',
    // '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    'preval', // Allows 'module.exports'
    'macros',
    [
      '@emotion/babel-plugin-jsx-pragmatic',
      {
        export: 'jsx',
        import: '__cssprop',
        module: '@emotion/react',
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: '__cssprop',
        pragmaFrag: 'React.Fragment',
      },
    ],
  ],
};
