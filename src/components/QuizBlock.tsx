import React from "react";
import { trpc } from "../utils/trpc";

const QuizBlock = () => {
  const { data, isLoading } = trpc.vocab.random.useQuery(
    {},
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-secodary pt-4 pb-6 md:col-span-2">
      {data && (
        <>
          <p className="text-xl">Level: {data.level}</p>
          <h2 className="text-7xl text-highlights">{data.word}</h2>
          <p>{data.romaji}</p>
          <form className="w-10/12">
            <input
              type="text"
              placeholder="Guess the meaning"
              className="w-full rounded-md  border-highlights p-2 text-gray-500 focus:outline-highlights"
            />
          </form>
        </>
      )}
    </div>
  );
};

export default QuizBlock;
