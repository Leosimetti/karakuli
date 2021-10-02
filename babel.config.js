// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        throwIfNamespace: false, // defaults to true
        runtime: 'classic', // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      },
    ],
  ],
}
