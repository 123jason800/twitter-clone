const { environment} = require('@rails/webpacker');
const path = require('path');


const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@comp':path.resolve(__dirname, '..', '..', 'app/javascript/src/components'),
      '@utils':path.resolve(__dirname, '..', '..', 'app/javascript/utils')
    }
  }
}

const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({

$: 'jquery',

jQuery: 'jquery',

Popper: ['popper.js', 'default']

}))




environment.config.merge(customConfig);

module.exports = environment
