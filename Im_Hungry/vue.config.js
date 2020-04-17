module.exports = {

devServer: {
    proxy: {
      'url': {
        target: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
        changeOrigin: true,
        pathRewrite: {
          '^url': ''
        }
      }

    }
  }
}
