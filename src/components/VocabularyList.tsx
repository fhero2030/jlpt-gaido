import React, { useRef, useEffect } from "react";

import { useDraggable } from "react-use-draggable-scroll";
import { useInView } from "react-intersection-observer";

import VocabularyCard from "./VocabularyCard";

import { trpc } from "../utils/trpc";

type Props = {
  level: number;
};

const VocabularyList = (props: Props) => {
  const { level } = props;

  const { ref: viewRef, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    trpc.vocab.byLevel.useInfiniteQuery(
      {
        level: level,
        limit: 10,
      },
      {
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, { applyRubberBandEffect: true });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div
      className="scrollbar-hide mb-10 flex min-w-full cursor-grabbing space-x-3 overflow-x-scroll"
      onMouseDown={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        events.onMouseDown(e);
      }}
      ref={ref}
    >
      {data?.pages.map((page) => (
        <React.Fragment key={page.nextCursor}>
          {page.vocabs.words.map((word, index) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            <VocabularyCard key={index} {...word} />
          ))}
        </React.Fragment>
      ))}

      {!data && isLoading && (
        <span
          className={`flex-none animate-pulse items-center p-3 text-4xl font-semibold text-highlights`}
        >
          作成
        </span>
      )}

      <span
        className={`my-auto inline-block flex-none animate-pulse items-center px-8 font-semibold text-highlights ${
          !hasNextPage && !isFetchingNextPage && "hidden"
        }`}
        ref={viewRef}
      >
        作成
      </span>
    </div>
  );
};

export default VocabularyList;
