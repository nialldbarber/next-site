const withFonts = require('next-fonts')

module.exports = withFonts({
  webpack(config) {
    config.resolve.modules.push(__dirname)
    return config;
  },
  env: {
    URI: 'https://api-euwest.graphcms.com/v1/cjq75dyq8co7c01bn8u1w7wwa/master',
  },
})
