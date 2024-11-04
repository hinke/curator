export type Owner = {
  name: string;
  url: string;
};

export type Artifact = {
  id: string;
  url: string;
  title: string;
  tag: string;
  owner: Owner;
};

export const artifacts: Artifact[] = [
    {
      id: '90e8145e-1046-4b19-be69-3f525dddc886',
      url: 'https://claude.site/artifacts/90e8145e-1046-4b19-be69-3f525dddc886',
      title: 'Pong',
      tag: 'Games',
      owner: {
        name: 'Henrik Berggren',
        url: 'https://www.henrikberggren.com/'
      }
    },
    {
      id: 'jina-reader',
      url: 'https://tools.simonwillison.net/jina-reader',
      title: 'Converts URLs to Markdown using Jina Reader',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'sqlite-wasm',
      url: 'https://tools.simonwillison.net/sqlite-wasm',
      title: 'SQLite demo running in WebAssembly',
      tag: 'Demos',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'extract-urls',
      url: 'https://tools.simonwillison.net/extract-urls',
      title: 'Tool for extracting URLs from text',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'clipboard-viewer',
      url: 'https://tools.simonwillison.net/clipboard-viewer',
      title: 'Displays clipboard content for inspection',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'llm-prices',
      url: 'https://tools.simonwillison.net/llm-prices',
      title: 'Calculator for estimating LLM usage costs',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'openai-audio',
      url: 'https://tools.simonwillison.net/openai-audio',
      title: 'Tool for processing audio with OpenAI models',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'text-wrap-balance-nav',
      url: 'https://tools.simonwillison.net/text-wrap-balance-nav',
      title: 'Text wrapping tool for balanced navigation',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'a3f85567-0afc-4854-b3d3-3746dd1a37f2',
      url: 'https://claude.site/artifacts/a3f85567-0afc-4854-b3d3-3746dd1a37f2',
      title: 'Pyodide REPL in the browser',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'e645c231-8c13-4374-bb7d-271c8dd73825',
      url: 'https://claude.site/artifacts/e645c231-8c13-4374-bb7d-271c8dd73825',
      title: 'Simulator for photo camera settings',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'ffeb439c-fc95-428a-9224-434f5f968d51',
      url: 'https://claude.site/artifacts/ffeb439c-fc95-428a-9224-434f5f968d51',
      title: 'Converts YAML to JSON',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: '46897436-e06e-4ccc-b8f4-3df90c47f9bc',
      url: 'https://claude.site/artifacts/46897436-e06e-4ccc-b8f4-3df90c47f9bc',
      title: 'Decodes QR codes',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: 'aaadab20-968a-4291-8ce9-6435f6d53f4c',
      url: 'https://claude.site/artifacts/aaadab20-968a-4291-8ce9-6435f6d53f4c',
      title: 'Escapes HTML entities',
      tag: 'Tools',
      owner: {
        name: 'Simon Willison',
        url: 'https://simonwillison.net/'
      }
    },
    {
      id: '13611a50-5e09-453a-8cfe-ee707dc23d46',
      url: 'https://claude.site/artifacts/13611a50-5e09-453a-8cfe-ee707dc23d46',
      title: 'Prime Number Predictor',
      tag: 'Math',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: 'd63a253e-7982-47db-bd5a-e76dddf601fc',
      url: 'https://claude.site/artifacts/d63a253e-7982-47db-bd5a-e76dddf601fc',
      title: 'Slot Machine',
      tag: 'Games',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '00e4d029-f236-4b35-bd48-341bf24465e2',
      url: 'https://claude.site/artifacts/00e4d029-f236-4b35-bd48-341bf24465e2',
      title: 'Word Cloud Generator',
      tag: 'Tools',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '0a4a1e14-85d8-4169-b251-6ceebda740cb',
      url: 'https://claude.site/artifacts/0a4a1e14-85d8-4169-b251-6ceebda740cb',
      title: 'Rubiks Cube',
      tag: 'Games',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '50954fd2-cf7d-485a-92c3-e861df782b72',
      url: 'https://claude.site/artifacts/50954fd2-cf7d-485a-92c3-e861df782b72',
      title: 'VC Liquidation',
      tag: 'Investing',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '4b9590a8-260e-476a-ab75-ec1d69f81d1e',
      url: 'https://claude.site/artifacts/4b9590a8-260e-476a-ab75-ec1d69f81d1e',
      title: 'AI Research Dashboard',
      tag: 'Research',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: 'b9769e4e-c20b-43da-945a-bfc41782900c',
      url: 'https://claude.site/artifacts/b9769e4e-c20b-43da-945a-bfc41782900c',
      title: 'Photosynthesis Process',
      tag: 'Biology',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '5b18fb27-1093-41d2-ac4e-54e47e4ddd3a',
      url: 'https://claude.site/artifacts/5b18fb27-1093-41d2-ac4e-54e47e4ddd3a',
      title: 'Interactive Diode Circuit Simulator',
      tag: 'Engineering',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: 'd57fdf93-79fb-443a-9bee-a58ab6eb911f',
      url: 'https://claude.site/artifacts/d57fdf93-79fb-443a-9bee-a58ab6eb911f',
      title: 'Tic Tac Toe',
      tag: 'Games',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '66770d05-aafe-45c4-b938-8cda0e82b903',
      url: 'https://claude.site/artifacts/66770d05-aafe-45c4-b938-8cda0e82b903',
      title: 'Smart Expense Tracker',
      tag: 'Personal Finance',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: 'f1ce9002-9434-4b40-9713-ef184c467557',
      url: 'https://claude.site/artifacts/f1ce9002-9434-4b40-9713-ef184c467557',
      title: 'Object Detection Mind Map',
      tag: 'Tools',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    },
    {
      id: '09f21906-6295-4d0a-9fa0-be4afd6dab71',
      url: 'https://claude.site/artifacts/09f21906-6295-4d0a-9fa0-be4afd6dab71',
      title: 'Advanced SEO Analysis Tool',
      tag: 'Web development',
      owner: {
        name: 'Harshita Katiyar',
        url: 'https://harshitakatiyar.medium.com/'
      }
    }
  ];