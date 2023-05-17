function getGHProxySecureOptions(GHAccessToken) {
    return {
      target: 'https://api.github.com',
      pathRewrite: {
        '^/ghsecure': ''
      },
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Bearer ${GHAccessToken}`);
      }
    };
  }
  
  function getGHProxyOptions() {
    return {
      target: 'https://api.github.com',
      pathRewrite: {
        '^/ghproxy': ''
      },
      changeOrigin: true
    };
  }

  module.exports = {
    getGHProxySecureOptions,
    getGHProxyOptions
  };