#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/dist/server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/dist/shared/stdio';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
  CallToolRequest,
} from '@modelcontextprotocol/sdk/dist/types';

class DiceServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'dice-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    
    // エラーハンドリング
    this.server.onerror = (error: unknown) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'roll_dice',
          description: 'サイコロを振って結果を返します',
          inputSchema: {
            type: 'object',
            properties: {
              sides: {
                type: 'number',
                description: 'サイコロの面の数（デフォルト: 6）',
                minimum: 2,
              },
              count: {
                type: 'number',
                description: '振るサイコロの数（デフォルト: 1）',
                minimum: 1,
                maximum: 10,
              },
            },
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
      if (request.params.name !== 'roll_dice') {
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${request.params.name}`
        );
      }

      const args = request.params.arguments as {
        sides?: number;
        count?: number;
      };

      const sides = args.sides || 6;
      const count = Math.min(args.count || 1, 10);

      if (sides < 2) {
        throw new McpError(
          ErrorCode.InvalidParams,
          'サイコロの面の数は2以上である必要があります'
        );
      }

      const results = Array.from({ length: count }, () =>
        Math.floor(Math.random() * sides) + 1
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                dice: `${count}d${sides}`,
                results,
                total: results.reduce((a, b) => a + b, 0),
              },
              null,
              2
            ),
          },
        ],
      };
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Dice MCP server running on stdio');
  }
}

const server = new DiceServer();
server.run().catch(console.error);
