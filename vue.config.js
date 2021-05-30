module.exports = {
  devServer: {
    port: 4200,
    proxy: {
      '^/api': {
        target: 'http://172.22.0.3:3000',
        changeOrigin: true,
      },
    },
  },
};
