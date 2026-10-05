# 変更履歴

## 2026-10-04 初期投入
- 依存ライブラリ不要の静的サイト、設定ファイル、Netlify設定、CIを追加。
- 公開フロー、公開前後チェック、作業ルールを追加。
- indexingEnabledとcontactEnabledを分離し、準備中のサイトはnoindex。
- 対象リポジトリを限定し、天花への変更を防止。

## 不具合記録テンプレート
発生日／案件／症状／原因／修正／再発防止／コミットSHA／Deploy ID／確認結果／所要時間

## 2026-10-04 公開後の整備
- Netlify公開URLを https://ktno-website.netlify.app/ に整理。
- 制作の流れとFAQを追加し、相談前に進め方を把握できる構成へ改善。
- 準備中の連絡欄を運用メールへの相談リンクに変更。フォーム・検索登録は準備段階として無効を維持。
- 公開前コミット: 83a1d952d9816bc9d5e529dab84f006cacee7389。

## 2026-10-05 集客導線と検索公開
- 公開前コミット: b08c62f34afe8e70e94770df042ac064de6c4824。
- 原因: 準備段階のindexingEnabled=falseが残り、公開サイトがnoindexとrobots Disallowで検索対象外だった。
- 修正: 本番でのみ検索登録を許可。プレビューのnoindexを維持。
- トップに相談CTA、相談メールに入力ひな形、ファーマゲートの実績に検証済み公開リンクを追加。
- 決定済みコピー・4サービス・デザインを維持。費用は個別見積もりと明記。
- 再発防止: 集客開始時は本番HTMLのrobotsとrobots.txtをセットで確認する。

## 2026-10-05 — approved hero logo
- Backup / prior production commit: 7b72d967e85845dab8580096d6fbd6442c4c4fba.
- Replaced the bold hero text with a lightweight SVG matching the approved thin KTNO wordmark and open O in the brand guideline.
- Retained the approved main copy and existing background motion. Logo entrance moves as one unit without distorting letter spacing.
- Prevention: use the approved SVG asset rather than a font substitute for the hero logo.

## 2026-10-06 — color fusion motion and intro copy
- Prior production commit: c8ca701a95ccfb90e20c427bd96642aaf6112f37.
- Changed intro heading to the exact approved text: アイデアが融合する.
- Background begins in solid lavender, gathers warm and cool gradient layers with staggered fades and movement, then returns over an 18-second cycle.
- CSS-only transform/opacity animation adds no video, image downloads, or JavaScript; reduced-motion preference shows a static blended background.

## 2026-10-06 — refined O detail
- Prior production commit: 2bd0130d32d9a67573ca09a429b42236609c8c60.
- Replaced the pointed, swollen O accent with a short 3-unit straight line and a balanced 16-unit opening. Preserved the approved thin KTNO letterforms.
- Prevention: use simple constant-width geometry for small logo details so they stay clean at hero scale.
