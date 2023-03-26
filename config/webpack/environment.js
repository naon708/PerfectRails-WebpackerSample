const { environment } = require('@rails/webpacker')
// rails-erb-loaderの設定を読み込む
const erb = require('./loaders/erb')
// ProvidePluginの設定を読み込む
const provide = require('./plugins/provide')

// 配列風オブジェクトの先頭にerbを追加
// environment.loadersはWebpackerが管理するloaderの設定リスト
environment.loaders.prepend('erb', erb)
environment.plugins.prepend('provide', provide)
module.exports = environment
