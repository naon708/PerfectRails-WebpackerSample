# README

### Webpacker

```
% bin/rails webpacker:compile
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

