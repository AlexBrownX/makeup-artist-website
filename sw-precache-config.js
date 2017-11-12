module.exports = {
    staticFileGlobs: [
      'dist/**.html',
      'dist/**.js',
      'dist/**.css',
      'dist/**.eot',
      'dist/**.svg',
      'dist/**.ico',
      'dist/**.jpg',
      'dist/assets/images/*',
      'dist/assets/images/wedding/*',
      'dist/assets/fonts/*',
      'dist/assets/eye_icon/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
  };
  