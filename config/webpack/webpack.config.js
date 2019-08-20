const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');
const terraDevSiteConfig = require('./terra-dev-site.webpack.config');
const themeConfig = require('../theme/theme-config');

const mergedConfig = (env, argv) => {
  const themeOverride = { ...env, themeConfig };
  return merge.strategy({
    'resolve.modules': 'prepend',
  })(defaultWebpackConfig(themeOverride, argv), terraDevSiteConfig(env, argv));
};

module.exports = mergedConfig;
