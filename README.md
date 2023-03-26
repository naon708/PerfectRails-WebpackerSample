# README

## Webpacker
https://github.com/rails/webpacker
> Webpacker has been retired.  
This bridge is no longer needed for most people in most situations following the release of Rails 7. 

### コンパイル
```
% bin/rails webpacker:compile
```
### webpacker関連のコマンド
```
% bin/rails help
....
webpacker
webpacker:binstubs
webpacker:check_binstubs
webpacker:check_node
webpacker:check_yarn
webpacker:clean[keep]
webpacker:clobber
webpacker:compile
webpacker:info
webpacker:install
webpacker:install:angular
webpacker:install:coffee
webpacker:install:elm
webpacker:install:erb
webpacker:install:react
webpacker:install:stimulus
webpacker:install:svelte
webpacker:install:typescript
webpacker:install:vue
webpacker:verify_install
webpacker:yarn_install
....
```
```
# app/javascript/packs内のファイルがエントリーポイントとなる
% ls -1 public/packs
js/
manifest.json
manifest.json.br
manifest.json.gz

# app/javascript/packs/application.jsをビルドした結果の成果物がapplication-xxx.jsになっている
% ls -1 public/packs/js
application-xxx.js
application-xxx.js.br
application-xxx.js.gz
application-xxx.js.map
application-xxx.js.map.br
application-xxx.js.map.gz
```

### Webpacker周りのファイル一覧

| パス      | 内容      |
| ---           | ---           |
| app/javascript/packs | エントリーファイルを置く場所 |
| app/javascript/ | エントリーファイルから読み込まれるモジュール群 |
| config/webpacker.yml | Webpackerの設定ファイル |
| config/webpack/*.js | 最終的なwebpackの設定を出力するファイル |
| babel.config.js | babelの設定ファイル |
| .browserlistrc | コンパイル対象となるブラウザを記述するファイル |


### rails new 時にフロントフレームワークを導入するオプション
```
--webpacker, [--webpack=WEBPACK] 
# Preconfigure Webpack with a particular framework (options: react, vue, angular, elm, stimulus)
```

### 既存のアプリに導入する
```
bin/rails webpacker:install:react
```

## memo
- CSS, 画像もWebpackerで管理できる
- `Webpacker::DevServerProxy`というRackミドルウェアを先頭に配置している
- フロント開発でpluginやloaderを追加したいとき
  - 素のwebpack → npm installしてwebpack.config.jsを編集するだけ
  - Webpacker → webpack.config.jsを持たないため独自の方法がある

## 参考記事
- Doc
  - https://github.com/rails/webpacker/tree/master/docs
- BrowsersList
  - https://browsersl.ist/
