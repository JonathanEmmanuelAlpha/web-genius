"use client";

import React from "react";
import Card from "./Card";
import ProgressBar from "@/components/form/ProgressBar";
import useArticle from "@/hooks/useArticle";
import { useAuth } from "@/contexts/AuthProvider";

export default function Articles() {
  const { currentUser } = useAuth();
  const { articles, loading } = useArticle(false, "", currentUser);

  return (
    <div>
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
              order={index + 1}
              createAt={article.pubAt}
              channel={article.pubAt}
              readTimer={article.readTime}
              reads={article.reads}
              title={article.title}
            />
          );
        })}
    </div>
  );
}
