## ✅ アプリ要件定義：CSV重複排除Webツール

### 🎯 ゴール

CSVをアップロードし、指定したフィールドの値が**完全一致**するレコードの重複を排除。
その結果をユーザーがダウンロード可能な**Webアプリ**としてGitHub Pagesにホスティング。

---

### 🔧 技術スタック

| 分類        | 技術                                         |
| --------- | ------------------------------------------ |
| フレームワーク   | [React](https://reactjs.org/)              |
| UIフレームワーク | [Tailwind CSS](https://tailwindcss.com/)   |
| CSV解析     | [PapaParse](https://www.papaparse.com/)    |
| ファイルDL    | Blob + `a.download`（または FileSaver.js）      |
| デプロイ先     | GitHub Pages（`next export` で静的化）           |
| ランタイム     | `next@14` + App Router（or Pages Router も可） |

> ※ GitHub Pagesで動かすため、`next export`（Static HTML Export）を前提とします

---

### 🖥️ 機能仕様

| 機能                 | 詳細                                     |
| ------------------ | -------------------------------------- |
| CSVアップロード          | ユーザーがCSVファイルをアップロード                    |
| フィールド一覧 + チェックボックス | 自動で列名（ヘッダー）を取得し、重複判定に使うかどうかをチェックで選択可能  |
| 重複排除ロジック           | チェックされたフィールドの**完全一致**をキーとして重複を検出・排除    |
| 結果の表示＆CSVダウンロード    | 重複を除いたCSVデータを画面に表示、またはCSVファイルとしてダウンロード |
| 統計表示（オプション）        | 「総行数」「重複除去後の行数」「削除数」など                 |
| ローカル処理             | 全処理をクライアント側で完結（CSV送信なし、セキュア）           |

---

### 📁 フォルダ構成（例：Next.js + App Router）

```
csv-deduper/
├── public/
├── app/
│   └── page.tsx           ← メインUI
├── components/
│   ├── FileUploader.tsx   ← CSVアップロード処理
│   ├── FieldSelector.tsx  ← チェックボックスUI
│   └── ResultTable.tsx    ← 結果表示とダウンロードボタン
├── lib/
│   └── deduplicate.ts     ← 重複判定ロジック
├── styles/
│   └── globals.css        ← Tailwindインポート
├── tailwind.config.js
├── next.config.js         ← `output: 'export'` を設定
└── package.json
```

---

### 🚀 デプロイ戦略（GitHub Pages）

1. `next.config.js` に `output: 'export'` を追加し静的サイト化
2. `next build && next export` 実行で `out/` フォルダ生成
3. `out/` を GitHub の `gh-pages` ブランチに push
4. GitHub Pages で公開
