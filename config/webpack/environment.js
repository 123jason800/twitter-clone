const { environment } = require('@rails/webpacker')



const path = require('path')
const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@comp':path.resolve(__dirname, '..', '..', 'app/javascript/src/components'),
      '@utils':path.resolve(__dirname, '..', '..', 'app/javascript/utils')
    }
  }
}

environment.config.merge(customConfig);

module.exports = environment
