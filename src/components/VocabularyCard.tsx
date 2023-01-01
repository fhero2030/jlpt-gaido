import React from "react";

import { JLPTWord } from "../types/typings";

const VocabularyCard = (props: JLPTWord) => {
  const { word, meaning, furigana, romaji } = props;

  return (
    <div className="flex-none rounded-md bg-secodary p-3">
      <h6 className="text-3xl font-semibold text-highlights">{word}</h6>
      <p>{meaning}</p>
      <p>
        <span className="text-slate-300">Furigana: </span>
        {furigana}
      </p>
      <p>
        <span className="text-slate-300">Romaji: </span>
        {romaji}
      </p>
    </div>
  );
};

export default VocabularyCard;
