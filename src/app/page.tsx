"use client";

import Card from "@/components/article/Card";
import ProgressBar from "@/components/form/ProgressBar";
import useArticle from "@/hooks/useArticle";

function Home() {
  const { articles, loading } = useArticle();

  return (
    <div
      className="
      ideal-h max-w-[1168px] mx-auto my-0 px-4 py-8
      flex flex-wrap items-center justify-center gap-8
    "
    >
      {loading && (
        <ProgressBar
          progress={25}
          spinnerMode
          indicatorWidth={5}
          trackWidth={5}
          size={40}
        />
      )}

      {!loading &&
        articles.map((article: any, index: number) => {
          return (
            <Card
              key={index}
              channel={article.channel}
              thumbnail={article.thumbnail}
              title={article.title}
              pubAt={article.pubAt}
              readers={article.reads}
            />
          );
        })}
    </div>
  );
}

export default Home;
