const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');
const terraDevSiteConfig = require('./terra-dev-site.webpack.config');
const themeConfig = require('../theme/theme-config');

const mergedConfig = (env, argv) => {
  const newEnv = { ...env, themeConfig };
  merge.strategy({
    'resolve.modules': 'prepend',
  })(defaultWebpackConfig(newEnv, argv), terraDevSiteConfig(env, argv));
};

module.exports = mergedConfig;
