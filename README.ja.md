<div align="center">
  <img src="assets/header.svg" alt="Dice Server Header" width="800">
</div>

<div align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/english-document-white.svg" alt="EN doc"></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/ドキュメント-日本語-white.svg" alt="JA doc"/></a>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/@makimaki/dice-server"><img src="https://img.shields.io/npm/v/@makimaki/dice-server.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@makimaki/dice-server"><img src="https://img.shields.io/npm/dm/@makimaki/dice-server.svg" alt="npm downloads"></a>
  <a href="https://github.com/yourusername/dice-server/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"></a>
</div>

# 🎲 Dice Server

MCPを使用してサイコロを振るためのサーバー

## 🌟 特徴

- 任意の面数のサイコロを振ることができます
- 複数のサイコロを同時に振ることができます
- 結果の合計値も自動で計算されます

## 🚀 インストール

```bash
npm install @makimaki/dice-server
```

## 💡 使用方法

### MCPサーバーとして使用

1. Claude.appの設定ファイルにサーバーを追加:

```json
{
  "mcpServers": {
    "dice": {
      "command": "dice-server",
      "env": {}
    }
  }
}
```

2. Claudeで以下のように使用できます:

```
roll_diceツールを使用して、6面ダイスを2個振ってください。
```

### プログラムから直接使用

```typescript
import { Server } from '@modelcontextprotocol/sdk';
import { StdioServerTransport } from '@modelcontextprotocol/sdk';

// サーバーのインスタンスを作成
const server = new DiceServer();
await server.run();
```

## 🛠️ API

### roll_dice

サイコロを振るためのツール

#### パラメータ

- `sides` (number, optional): サイコロの面の数（デフォルト: 6）
- `count` (number, optional): 振るサイコロの数（デフォルト: 1、最大: 10）

#### 戻り値

```json
{
  "dice": "2d6",
  "results": [3, 5],
  "total": 8
}
```

## 🔧 開発

### 環境構築

```bash
git clone https://github.com/yourusername/dice-server.git
cd dice-server
npm install
```

### テスト実行

```bash
npm test
```

### ビルド

```bash
npm run build
```

## 📝 ライセンス

MIT

## 👥 コントリビューション

Issue、Pull Requestはいつでも歓迎します！

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m '✨ feat: 素晴らしい機能を追加'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成
