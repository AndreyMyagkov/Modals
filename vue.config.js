module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true,
  assetsDir:'assets',

  pages: {
    index: 'src/main.js',
    modals: 'src/pages/modals/modals.js',
    auth: 'src/pages/auth/auth.js'
  }
}
