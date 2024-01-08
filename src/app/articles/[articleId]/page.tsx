"use client";

import ProgressBar from "@/components/form/ProgressBar";
import useArticle from "@/hooks/useArticle";

function Article({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { page: string };
}) {
  const { article, loading } = useArticle(false, params.articleId, null);

  return (
    <div className="ideal-h max-w-[680px] mx-auto my-0 px-8 py-8 bg-slate-50">
      {loading && (
        <ProgressBar
          progress={25}
          spinnerMode
          indicatorWidth={5}
          trackWidth={5}
          size={40}
        />
      )}

      {!loading && article && (
        <>
          <h1 className="title-impact text-4xl leading-[3rem] text-slate-800">
            {article.title}
          </h1>

          <div className="my-4 flex items-center gap-4 text-slate-600">
            <img
              className="w-14 h-14 rounded-full"
              src="/images/avatars/user7.jpg"
              alt="Avater - 7"
            />
            <div>
              <span>John doe</span>
              <div className="flex gap-x-8">
                <span>{article.readTime}min de lectures</span>
                <span>{article.pubAt}</span>
              </div>
            </div>
          </div>

          <img className="w-full" src={article.thumbnail} alt="Thumbnail" />
        </>
      )}
    </div>
  );
}

export default Article;
