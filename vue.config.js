let proxyObj = {}
proxyObj['/'] = {
  ws: false,
  //目标地址
  target: 'http://127.0.0.1:8099',
  changeOrigin: true,
  pathReWrite:{
    '^': '/'
  }
}
module.exports = {
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8071,
    proxy:proxyObj
  }
}
