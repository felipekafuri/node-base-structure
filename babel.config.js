module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@modules': './src/models',
        '@core': './src/core',
        '@shared': './src/shared',
        '@infra': './src/infra',
        '@config': './src/config',
        '@controllers': './src/controllers',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}