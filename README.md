# README

## ディレクトリ
#### /src
コンパイル前のJS, SASS開発コード、コンパイル後htdocsに書き出される。

#### /htdocs
Electron開発コード

#### /packege
アプリケーション書き出しディレクトリ



## コマンド
#### 開発環境のパッケージインストール。
ルートフォルダで
```
$ npm install
```

#### 開発コマンド（デバッグモード ON）
```
$ gulp
```

#### 開発コマンド（デバッグモード OFF）
```
$ gulp -pro
```

#### パッケージ化 windows版
```
$ gulp win-package
```

#### パッケージ化 mac版
```
$ gulp mac-package
```
※ MacでWindows用のElectronはパッケージングできないようになっています。
したい場合はwineをインストールする必要があります。
参考）「Mac環境でElectronのWindows用パッケージングをしたら大変だった話」
http://qiita.com/kimura_m_29/items/ee929cbd08daf744bffc



## 参考
https://qiita.com/kgsi/items/075775de7ed574481242

