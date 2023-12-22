"use client";

import Alert from "@/components/form/Alert";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import Textarea from "@/components/form/Textarea";
import { FormEvent, useState } from "react";

export default function Creator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [readTime, setReadTime] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(title);
  }

  return (
    <div className="max-w-[1024px] mx-auto my-0">
      <h2 className="text-center uppercase py-4 text-xl text-[--primary-color] font-medium">
        Ajouter un article
      </h2>
      <form method="post" onSubmit={handleSubmit}>
        <Input
          id="title"
          label="Titre de l'article"
          required
          type="text"
          maxChar={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          id="description"
          label="Desription"
          required
          maxChar={120}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="w-full flex justify-center items-center gap-8">
          <Input
            className="w-1/2"
            id="category"
            label="Catégorie"
            required
            type="text"
            maxChar={50}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            className="w-1/2"
            id="readTime"
            label="Temps de lecture"
            required
            type="number"
            maxChar={50}
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </div>
        <Textarea
          id="tags"
          label="Tags(ex: #tag1 #tag2)"
          required
          maxChar={120}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Alert
          type="danger"
          message="Lorem ipsum dolor set alet, consectetur adiscipim elit."
        />
        <SubmitButton text="Ajouter" />
      </form>
    </div>
  );
}
