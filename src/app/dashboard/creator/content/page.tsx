"use client";

import TextEditor from "@/components/form/TextEditor";

import { FormEvent, useState } from "react";

export default function Content() {
  const [content, setContent] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("title");
  }

  return (
    <div className="max-w-[1024px] mx-auto my-6">
      <form method="post" onSubmit={handleSubmit}>
        <TextEditor articleId="4g875g7gg4s4s1sr44" />
      </form>
    </div>
  );
}
