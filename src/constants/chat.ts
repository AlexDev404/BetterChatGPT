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
  'openai:gpt-3.5-turbo',
  'openai:gpt-3.5-turbo-16k',
  'openai:gpt-4',
  'openai:gpt-4-32k',
  'openai:text-ada-001',
  'openai:text-babbage-001',
  'openai:text-curie-001',
  'openai:text-davinci-002',
  'openai:text-davinci-003',
  'cohere:command-nightly',
  'cohere:command-light-nightly',
  'replicate:replicate/llama-2-7b-chat',
  'replicate:replicate/llama-2-13b-chat',
  'replicate:replicate/llama-2-70b-chat',
  'pai-001-beta',
  'pai-001-light-beta'
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'openai:gpt-3.5-turbo-16k';

export const modelMaxToken = {
  'openai:gpt-3.5-turbo': 4096,
  'openai:gpt-3.5-turbo-0301': 4096,
  'openai:gpt-3.5-turbo-0613': 4096,
  'openai:gpt-3.5-turbo-16k': 16384,
  'openai:gpt-3.5-turbo-16k-0613': 16384,
  'openai:gpt-4': 8192,
  'openai:gpt-4-0314': 8192,
  'openai:gpt-4-0613': 8192,
  'openai:gpt-4-32k': 32768,
  'openai:gpt-4-32k-0314': 32768,
  'openai:gpt-4-32k-0613': 32768,
  'openai:text-ada-001': 2049,
  'openai:text-babbage-001': 2049,
  'openai:text-curie-001': 2049,
  'openai:text-davinci-002': 4097,
  'openai:text-davinci-003': 4097,
  'cohere:command-nightly': 4096,
  'cohere:command-light-nightly': 4096,
  'replicate:replicate/llama-2-7b-chat': 4096,
  'replicate:replicate/llama-2-13b-chat': 4096,
  'replicate:replicate/llama-2-70b-chat': 4096,
  'pai-001-beta': 4096,
  'pai-001-light-beta': 4096,
};

export const modelCost = {
  'openai:gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'openai:gpt-3.5-turbo-0301': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'openai:gpt-3.5-turbo-0613': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'openai:gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'openai:gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'openai:gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'openai:gpt-4-0314': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'openai:gpt-4-0613': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'openai:gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'openai:gpt-4-32k-0314': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'openai:gpt-4-32k-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'pai-001-beta': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'pai-001-light-beta': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'openai:text-ada-001': {
    prompt: { price: 0.40, unit: 1000000 },
    completion: { price: 1.60, unit: 1000000 },
  },
  'openai:text-babbage-001': {
    prompt: { price: 0.60, unit: 1000000 },
    completion: { price: 2.40, unit: 1000000 },
  },
  'openai:text-curie-001': {
    prompt: { price: 3.00, unit: 1000000 },
    completion: { price: 12.00, unit: 1000000 },
  },
  'openai:text-curie-001': {
    prompt: { price: 3.00, unit: 1000000 },
    completion: { price: 12.00, unit: 1000000 },
  },
  'openai:text-davinci-002': {
    prompt: { price: 30.00, unit: 1000000 },
    completion: { price: 120.00, unit: 1000000 },
  },
  'openai:text-davinci-003': {
    prompt: { price: 30.00, unit: 1000000 },
    completion: { price: 120.00, unit: 1000000 },
  },
  'cohere:command-nightly': {
    prompt: { price: 15.00, unit: 1000000 },
    completion: { price: 15.00, unit: 1000000 },
  },
  'cohere:command-light-nightly': {
    prompt: { price: 15.00, unit: 1000000 },
    completion: { price: 15.00, unit: 1000000 },
  },
  'replicate:replicate/llama-2-7b-chat': {
    prompt: { price: 0.07, unit: 1000000 },
    completion: { price: 0.28, unit: 1000000 },
  },
  'replicate:replicate/llama-2-13b-chat': {
    prompt: { price: 0.14, unit: 1000000 },
    completion: { price: 0.56, unit: 1000000 },
  },
  'replicate:replicate/llama-2-70b-chat': {
    prompt: { price: 0.70, unit: 1000000 },
    completion: { price: 2.80, unit: 1000000 },
  }
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
