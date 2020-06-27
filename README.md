【運用ルール】

- 　develop　開発用（共有）ブランチ
- 　feature/foo　作業ブランチ（作業完了後にdevelopにマージしていく）
- 　共通ファイルに関しては基本的にはいじらず新規追加する形で対応する
- 　※_variables.scssなどにカラー追加したい場合などは適宜対応してください。


# for Project

## プロジェクト準備

### Install npm

プロジェクトルートに npm をインストールします。
`npm i`

※Node.js が入っていない場合予め Node.js をインストールしてください。

## Start project

プロジェクトルートで以下を実行します。
`gulp`
各コンパイルを実施しブラウザが起動します。

### 実行内容

`gulp`で実行される内容は以下です。

-   html の作成・整形
-   scss から css への Autoprefixer 適用・MediaQury の整列・圧縮
-   js の結合・圧縮
-   images の圧縮
-   上記完了後ブラウザを起動・ファイルの更新を監視・ファイルの変更を検知後ブラウザリロード

## プロジェクト構成

.  
├── dest ### public  
│   └── common  
│   　　 ├── css  
│   　　 ├── images
│   　　 └── js 
└── src  
　　 ├── html
　　 └── images
　　 ├── js  
　　 ├── js-vendor  
　　 └── sass

`src`フォルダで作成したファイルは`dest`フォルダにコンパイルされます。  
css および Javascript　および images はコンパイル時に圧縮されます。（※一旦圧縮は外しています。）  
ブラウザでの検証時は sourcemap を使用します。  
`dest`直下の html およびスタイルガイドから`/dest/common/`の内容を参照します。

## 使用しているツール

-   gulp(v4)
-   scss

## ページ作成

### HTML について

-   `gulp`を実行中の状態で`/src/html/`配下に html ファイルを追加すると`/dest/`にファイルが作成されます。
-   共通要素を管理するためレイアウトに Nunjucks を使用してますが、本文エリアについては通常の html を記載いただきます。  
     ※Nunjucks の記述方法がわかる場合は本文エリアで使用していただいても問題ありません。

### css について

-   sass(scss)を使用しています。

`gulp`を実行中の状態で`/src/sass/`配下に scss を追加すると同フォルダがコンパイルされ`/dest/common/css/`にファイルが作成されます。

#### 命名規則

-   ハイフンつなぎを使用します。
    `.block-element-component`  
    例：`.product-list-item`

### 更新履歴
2020.06.27　.gitignoreに/dest配下を追加。コンパイルは各自の環境にて実施（コンパイルファイルはGit上で管理しない）
2020.06.27　gulpに「gulp-imagemin」「gulp-newer」を追加。画像圧縮機能をつけて、src→destに書き出し。
