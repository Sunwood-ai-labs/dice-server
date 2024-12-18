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

A Model Context Protocol (MCP) server for rolling dice

## 🌟 Features

- Roll dice with any number of sides
- Roll multiple dice simultaneously
- Automatically calculate the total of all dice rolls

## 🚀 Installation

```bash
npm install @makimaki/dice-server
```

## 💡 Usage

### As an MCP Server

1. Add the server to your Claude.app configuration file:

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

2. Use it in Claude like this:

```
Please use the roll_dice tool to roll two six-sided dice.
```

### Direct Usage in Code

```typescript
import { Server } from '@modelcontextprotocol/sdk';
import { StdioServerTransport } from '@modelcontextprotocol/sdk';

// Create server instance
const server = new DiceServer();
await server.run();
```

## 🛠️ API

### roll_dice

A tool for rolling dice

#### Parameters

- `sides` (number, optional): Number of sides on each die (default: 6)
- `count` (number, optional): Number of dice to roll (default: 1, max: 10)

#### Return Value

```json
{
  "dice": "2d6",
  "results": [3, 5],
  "total": 8
}
```

## 🔧 Development

### Setup

```bash
git clone https://github.com/yourusername/dice-server.git
cd dice-server
npm install
```

### Running Tests

```bash
npm test
```

### Building

```bash
npm run build
```

## 📝 License

MIT

## 👥 Contributing

Issues and Pull Requests are always welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '✨ feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
