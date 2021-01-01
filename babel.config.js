module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-typescript',
    [
      '@emotion',
      {
        sourceMap: false,
      },
    ],
  ],
  presets: ['@babel/preset-react'],
};
