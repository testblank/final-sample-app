const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};