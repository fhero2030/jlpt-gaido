export type JLPTWord = {
  word: string;
  meaning: string;
  furigana: string;
  romaji: string;
  level: number;
};

export type JLPTVocab = {
  total: number;
  offset: number;
  limit: number;
  words: JLPTWord[];
};
