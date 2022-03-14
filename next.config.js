module.exports = {
  reactStrictMode: true,
  optimizeImages: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/contact': { page: '/contact' }
    }
  }
}
