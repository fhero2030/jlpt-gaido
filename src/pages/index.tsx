import type { NextPage } from "next";
import PageContainer from "../layouts/PageContainer";
import VocabularyList from "../components/VocabularyList";
import { trpc } from "../utils/trpc";
import QuizBlock from "../components/QuizBlock";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <section className="mx-auto mb-20 grid items-center gap-20 py-24 md:grid-cols-5 md:py-44">
        <div className=" flex flex-col gap-4 md:col-span-3">
          <div className="flex items-center gap-3 text-6xl font-semibold">
            <h1>JLPT</h1>
            <div className="flex text-highlights">
              <div className="flex flex-col items-center">
                <p>ガ</p>
                <p className="text-sm text-white">GA</p>
              </div>
              <div className="flex flex-col items-center">
                <p>イ</p>
                <p className="text-sm text-white">I</p>
              </div>
              <div className="flex flex-col items-center">
                <p>ド</p>
                <p className="text-sm text-white">DO</p>
              </div>
            </div>
          </div>
          <p className="text-xl">
            A guide on mastering JLPT Vocabulary from N5 Level to N1 Level
          </p>
        </div>
        <QuizBlock />
      </section>

      <section>
        <h3 className="mb-4 text-2xl">N5 Vocabularies</h3>
        <VocabularyList level={1} />
        <h3 className="mb-4 text-2xl">N4 Vocabularies</h3>
        <VocabularyList level={2} />
        <h3 className="mb-4 text-2xl">N3 Vocabularies</h3>
        <VocabularyList level={3} />
        <h3 className="mb-4 text-2xl">N2 Vocabularies</h3>
        <VocabularyList level={4} />
        <h3 className="mb-4 text-2xl">N1 Vocabularies</h3>
        <VocabularyList level={5} />
      </section>
    </PageContainer>
  );
};

export default Home;
