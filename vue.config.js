module.exports = {
  publicPath: '',
  transpileDependencies: true,
  devServer: {
    https: true
  },
  pwa: {
    manifestOptions:{
      name:'Scan4Me',
      start_url:'/home'
    }
  }
}
