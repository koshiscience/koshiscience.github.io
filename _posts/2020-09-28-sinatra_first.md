---
title: お手軽webサーバー、Sinatraはじめのいっぽ！
tags:
- Ruby
- programming
---

# webサーバーを作ろう！

こんにちは。高志中学校サイエンス部プログラミング班です。

今回のブログでは、Sinatraというフレームワークを使って、簡単なwebサーバーを作ってみようと思います！

# Sinatraってなに？

Sinatraは、Rubyというプログラミング言語で動くwebサーバーフレームワークです。

分かりにくく感じますが、、、簡単に言うと、サーバーを楽に作れるものとなります。

Rubyのwebサーバーフレームワークというと、Ruby on Railsが有名ですが、Sinatraのほうがシンプルで単純なのでわかりやすいです。

# 早速インストール！

早速インストール！のその前に・・・

RubyがPCにインストールされている必要があります。

インストールの方法はOSによって異なるので、「ruby インストール windows」のように検索して調べてみてください。



Rubyのインストールができたら、早速Sinatraのインストールをしていきましょう。

WindowsならWindows PowerShell、Macならターミナルを起動しましょう。

起動出来たら、下のように打ってみましょう。

```
gem install sinatra
```

これを入力すると、Sinatra本体のインストールが始まります。

```
gem install sinatra-contrib
```

で、Sinatra関連の便利ツールもインストールされます。

# webサーバーで"Hello World"

それでは、定番の"Hello World"を表示するプログラムを書いてみましょう。

どこかに作業用のフォルダーを作ってみましょう。

それから、AtomやVisual Studio Codeなどのテキストエディタでそのフォルダーを開きます。

そして、example.rbというファイルを作り、

```ruby
require "sinatra"
require "sinatra/reloader"

get "/" do
    "Hello World"
end
```

と入力しましょう。

次に、example.rbを実行します。

ターミナルなどで、

```
cd /home/pi/ruby
```

と入力して、フォルダーの中へ移動します（/home/pi/rubyの部分はフォルダーのパスを入力してください）

そこで、

```
ruby example.rb
```

として、example.rbを実行してみましょう。

いろいろログが出てきますが、"Hello World"とは表示されませんね。

また、何も起こらずにコマンドを打つ画面に戻ってしまったら、エラーが発生しているかもしれません。

プログラムの中身や手順をよく確認してみてください。

うまくいってたら、すでにサーバーが起動しています！

ブラウザで、[https://localhost:4567/](https://localhost:4567)にアクセスしてみると・・・

どうでしょうか？

Hello Worldと表示されたら成功です！

# プログラムの構造

もう一度、さっきのプログラムを見てみましょう

```ruby
require "sinatra"
require "sinatra/reloader"

get "/" do
    "Hello World"
end
```

1行目：Sinatraを読み込む

2行目：実行中にファイルが変更された場合、その変更を反映するツールを読み込む

4行目："/"の要求を受けたら、

5行目："Hello World"を返して

6行目：get "/"の処理を終わる

こんな感じです。

6行目"Hello World"の部分を変更すると、どうなるでしょうか？

7行目"/"の部分を変更すると、どうなるでしょうか？

いろいろ試してみましょう！

# 改造のポイント

```ruby
get "/" do
    "Hello World"
end
```

の部分では、do~endの間に"Hello World"という文字列しかないですが、ここには処理を書き込むこともできます。

Rubyの処理を書き込めるので、いろいろ調べて試してみてください！

試しにカウント機能作ってみました。

```ruby
require "sinatra"
require "sinatra/reloader"

i = 0

get "/" do
    i = i + 1
    "#{i}"
end
```

一回読み込むごとに、表示される数字が増えていきます！

このように、いろいろ改造してみましょう！

## 報告

現在、ブログのタグ機能がうまく機能していません。

工夫して実装したのですが、GitHub Pagesではうまく動かないようです。

そのため、代わりの方法を考えています。

タグ機能の復活までしばらくお待ちください。
