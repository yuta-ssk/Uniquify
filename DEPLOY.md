# GitHub Pages デプロイ手順

このプロジェクトをGitHub Pagesで公開する手順を説明します。

## 前提条件

- GitHubリポジトリが作成されていること
- Node.js 20以上がインストールされていること

## デプロイ手順

### 1. リポジトリの設定

1. GitHubでリポジトリを作成します（例: `uniquify`）
2. ローカルプロジェクトをGitHubにプッシュします：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/uniquify.git
git push -u origin main
```

### 2. GitHub Pages の有効化

1. GitHubリポジトリの「Settings」タブを開きます
2. 左サイドバーの「Pages」をクリックします
3. 「Source」セクションで「GitHub Actions」を選択します

### 3. 自動デプロイの確認

1. コードをmainブランチにプッシュすると、自動的にGitHub Actionsが実行されます
2. 「Actions」タブでワークフローの進行状況を確認できます
3. デプロイが成功すると、以下のURLでアプリケーションにアクセスできます：
   ```
   https://YOUR_USERNAME.github.io/uniquify/
   ```

## 設定ファイルの説明

### `.github/workflows/deploy.yml`
GitHub Actionsのワークフローファイル。mainブランチへのプッシュ時に自動的にビルドとデプロイを実行します。

### `next.config.js`
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/uniquify' : ''
```
本番環境では `/uniquify` をベースパスとして設定しています。リポジトリ名と一致させる必要があります。

## トラブルシューティング

### ビルドエラーが発生する場合
1. ローカルで `npm run build` を実行してエラーを確認
2. TypeScriptの型エラーがないか確認
3. 依存関係が正しくインストールされているか確認

### ページが404エラーになる場合
1. リポジトリ名と `next.config.js` の `basePath` が一致しているか確認
2. GitHub Pagesが有効になっているか確認
3. デプロイが成功しているか Actions タブで確認

### スタイルが適用されない場合
1. `basePath` の設定が正しいか確認
2. 静的ファイルのパスが相対パスになっているか確認

## カスタムドメインの設定（オプション）

1. リポジトリの Settings > Pages で「Custom domain」にドメインを入力
2. DNSプロバイダーでCNAMEレコードを設定：
   ```
   CNAME: YOUR_DOMAIN -> YOUR_USERNAME.github.io
   ```
3. HTTPSを有効にする場合は「Enforce HTTPS」にチェック

## 更新方法

アプリケーションを更新するには、単にmainブランチにコミットをプッシュするだけです：

```bash
git add .
git commit -m "Update: 機能の説明"
git push origin main
```

GitHub Actionsが自動的に新しいバージョンをビルドしてデプロイします。