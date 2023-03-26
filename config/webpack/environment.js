const { environment } = require('@rails/webpacker')
// rails-erb-loaderの設定を読み込む
const erb = require('./loaders/erb')

// 配列風オブジェクトの先頭にerbを追加
// environment.loadersはWebpackerが管理するloaderの設定リスト
environment.loaders.prepend('erb', erb)
module.exports = environment
