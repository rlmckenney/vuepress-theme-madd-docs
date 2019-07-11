module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'smooth-scroll',
    [
      'clean-urls', 
      {normalSuffix: '/', indexSuffix: '/'}
    ]
  ]
}