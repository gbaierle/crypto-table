module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/crypto-table/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}
