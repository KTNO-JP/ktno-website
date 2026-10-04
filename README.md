# ktno-website

KTNO公式サイトの初期構成。メインコピーは「やってみよう！を仕事にする。」。掲載内容を確定しながら発展させます。

## 開発
Node.js 22以上。外部依存なし。
```sh
npm run build
npm run check
npx --yes serve dist
```
`site.config.json`でブランド・文章・実績・公開フラグを設定。`public/`でCSS・JS・画像、`scripts/`で生成・検査。`dist/`は生成物でGit管理しません。

初期状態は `indexingEnabled: false`、`contactEnabled: false`。公開準備が整ったら各機能を個別に有効化します。Forms利用時はNetlifyで検出・送信・通知先を確認します。
運用メール：added.tech20000@gmail.com（アカウント変更完了を意味しません）。

## Netlify
main、build `npm run build && npm run check`、publish `dist`。`SITE_URL`を最終HTTPS URLへ設定。未指定時はNetlifyの`URL`を利用。プレビューはnoindex。本番は`indexingEnabled: true`で検索許可。

## 手順
- [HP制作標準手順](docs/HP制作標準手順.md)
- [公開前後チェック](docs/公開前後チェック.md)
- [GitHub→Netlify→独自ドメイン→SEO/Search Console](docs/公開フロー.md)
- [変更・不具合記録](CHANGELOG.md)

公開・検索登録は未実施。TenkaHita/tenka-websiteを変更対象に含めません。
