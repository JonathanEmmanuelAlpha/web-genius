"use client";

import useAuthors from "@/hooks/useAuthors";
import AuthorCard2 from "../ui/AuthorCard2";
import ProgressBar from "@/components/form/ProgressBar";

export default function Authors() {
  const { authors, loading } = useAuthors(false);

  return (
    <div className="max-w-[1024px] mx-auto my-0">
      {loading && (
        <ProgressBar
          progress={25}
          spinnerMode
          indicatorWidth={5}
          trackWidth={5}
          size={40}
        />
      )}

      {!loading && (
        <div className="flex flex-wrap items-center justify-center gap-6 py-8">
          {authors.map((author: any, index: number) => {
            return (
              <AuthorCard2
                key={index}
                avatar={author.picture}
                joinAt={author.createAt}
                pseudo={author.email}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
