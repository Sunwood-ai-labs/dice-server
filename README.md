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

## 📝 ライセンス

MIT

## 👥 コントリビューション

Issue、Pull Requestはいつでも歓迎します！
