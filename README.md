# README

## Directory
#### /src
コンパイル前のJS, SASS開発コード、コンパイル後htdocsに出力します。

#### /htdocs
Electron開発コード

#### /packege
アプリケーション書き出し先ディレクトリ



## Command
#### NPM Pakage Install
```
$ npm install
```

#### Develop（Debug Mode ON）
```
$ gulp
```

#### Develop（Debug Mode OFF）
```
$ gulp -pro
```

#### Package for Windows
```
$ gulp win-package
```

#### Package for Mac
```
$ gulp mac-package
```

※ MacでWindows用のElectronはパッケージングできないようになっています。<br>
したい場合はwineをインストールする必要があります。<br>
参考）「Mac環境でElectronのWindows用パッケージングをしたら大変だった話」<br>
http://qiita.com/kimura_m_29/items/ee929cbd08daf744bffc



## Reference
https://qiita.com/kgsi/items/075775de7ed574481242

