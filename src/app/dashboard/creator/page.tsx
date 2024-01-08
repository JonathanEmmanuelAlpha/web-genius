"use client";

import Alert from "@/components/form/Alert";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import { useAuth } from "@/contexts/AuthProvider";
import { ApiResponseType } from "@/models/response-api";
import { create } from "@/services/article.service";

import { FormEvent, useState } from "react";

export default function Creator() {
  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");
  const [readTime, setReadTime] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!currentUser) return;

    event.preventDefault();

    setResponse(null);
    setLoading(true);

    create(title, parseInt(readTime), category, thumbnail, currentUser.email)
      .then((res) => {
        setLoading(false);
        setResponse(res);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  return (
    <div className="max-w-[768px] mx-auto my-0">
      <h2 className="text-center uppercase py-4 text-xl text-[--primary-color] font-medium">
        Ajouter un article
      </h2>
      <form method="post" onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Titre de l'article"
          required
          type="text"
          maxChar={120}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          id="thumbnail"
          label="Thumbnail url"
          required
          type="url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <div className="w-full flex justify-center items-center gap-8">
          <Input
            className="w-1/2"
            id="category"
            label="Catégorie"
            required
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            className="w-1/2"
            id="readTime"
            label="Temps de lecture"
            required
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </div>

        {response != null && (
          <Alert
            message={response.message}
            type={response.type == ApiResponseType.ERROR ? "danger" : "success"}
          />
        )}

        <SubmitButton text="Ajouter" loading={loading} />
      </form>
    </div>
  );
}
