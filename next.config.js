const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})
const nextTranslate = require('next-translate')

module.exports = bundleAnalyzer(
  nextTranslate({
    images: {},
    target: process.env.TARGET,
    i18n: {
      locales: ['en', 'ar'],
      defaultLocale: 'en',
    },
  })
)
