import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'pai-001-beta',
  'pai-001-light-beta',
  'gpt-4o-latest',
  '@cf/meta/llama-4-scout-17b-16e-instruct',
  'granite-chat',
  'microsoft/phi-3.5-vision-instruct',
  'openai/gpt-oss-20b',
  'gpt-4',
  'llama-3.1-8b-instruct',
  'phind-405b',
  'gemini-2.0-flash'
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel: ModelOptions = 'gpt-4';

export const modelMaxToken: Record<ModelOptions, number> = {
  'pai-001-beta': 4096,
  'pai-001-light-beta': 4096,  // 4096 but it's buggy so yeah
  'gpt-4o-latest': 4096,
  '@cf/meta/llama-4-scout-17b-16e-instruct': 4096,
  'granite-chat': 4096,
  'microsoft/phi-3.5-vision-instruct': 4096,
  'openai/gpt-oss-20b': 4096,
  'gpt-4': 4096,
  'llama-3.1-8b-instruct': 4096,
  'phind-405b': 4096,
  'gemini-2.0-flash': 4096
};

export const modelCost: Record<ModelOptions, {
  prompt: { price: number; unit: number };
  completion: { price: number; unit: number };
}> = {
  'pai-001-beta': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'pai-001-light-beta': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4o-latest': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  '@cf/meta/llama-4-scout-17b-16e-instruct': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'granite-chat': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'microsoft/phi-3.5-vision-instruct': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'openai/gpt-oss-20b': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'gpt-4': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'llama-3.1-8b-instruct': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'phind-405b': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
  'gemini-2.0-flash': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
