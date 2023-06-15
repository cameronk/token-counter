'use server';

import { TiktokenModel, encoding_for_model } from "@dqbd/tiktoken";


export async function countTokens(data: FormData) {
  try {
    const text = data.get('text') as string;
    const model = data.get('model') as TiktokenModel;

    const text_trimmed = text.trim();

    const tokenizer = encoding_for_model(model);
    const tokens = tokenizer.encode(text_trimmed);
    tokenizer.free();

    return {
      characters: text_trimmed.length,
      words: text_trimmed.split(/\s+/).length,
      tokens: tokens,
      tokens_count: tokens.length
    }
  } catch (error: any) {
    return {
      error: {
        message: error?.message || 'Unknown error'
      }
    }
  }
}

export type CountTokensResponse = Awaited<ReturnType<typeof countTokens>>;