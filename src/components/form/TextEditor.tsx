"use client";

import React, { useCallback, useEffect, useState } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-bright.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useAuth } from "@/contexts/AuthProvider";
import SubmitButton from "./SubmitButton";
import { usePathname, useSearchParams } from "next/navigation";
import Alert from "./Alert";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }, { size: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ script: "sub" }, { script: "super" }],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["direction", { align: [] }],
  ["link", "image", "video", "blockquote"],
  ["code-block", "formula", "clean"],
];

const SAVE_INTERVAL = 1000 * 60 * 10;

function TextEditor({ articleId }: { articleId: string }) {
  const params = useSearchParams();
  const pathname = usePathname();

  const { currentUser } = useAuth();

  const [quill, setQuill] = useState<Quill>();

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<any>(null);
  const [error, setError] = useState("");

  const [saving, setSaving] = useState(false);

  /** Get document from target edition channel */
  useEffect(() => {
    if (quill == null || !articleId || !currentUser) return;

    setLoading(false);
  }, [quill, articleId, currentUser]);

  /** Set quill contents to the existing article content */
  useEffect(() => {
    if (!quill || loading || !article) return;

    if (error) quill.setText(error);

    if (article.content) {
      quill.setContents(JSON.parse(article.content));
    }

    if (!article.content) quill.setText("");

    quill.enable();
  }, [quill, loading, article, error]);

  /** Save current document evry @param SAVE_INTERVAL seconds */
  useEffect(() => {
    if (quill == null || loading || !article) return;

    const interval = setInterval(() => {
      handleSave();
    }, SAVE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [quill, loading, article, handleSave]);

  /** Quill editor image upload live cycle */
  useEffect(() => {
    if (quill == null || typeof selectLocalImage != "function") return;

    // quill editor add image handler
    quill.getModule("toolbar").addHandler("image", () => {
      selectLocalImage();
    });

    const range = quill.getSelection();
  }, [quill, selectLocalImage]);

  const wrapperRef = useCallback((wrapper: any) => {
    if (wrapper === null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);

    const languages = [
      "javascript",
      "typescript",
      "jsx",
      "js",
      "ts",
      "tsx",
      "c",
      "h",
      "hpp",
      "hxx",
      "cpp",
      "java",
      "python",
      "html",
      "css",
      "scss",
      "csharp",
      "ruby",
      "xml",
    ];

    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        syntax: {
          highlight: (text: any) => hljs.highlightAuto(text, languages).value,
        },
        toolbar: TOOLBAR_OPTIONS,
      },
    });

    q.setText("loading content...");
    q.disable();

    setQuill(q);
  }, []);

  function selectLocalImage() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    // Listen upload local image and save to server
    input.onchange = () => {
      if (!input.files) return;

      const file = input.files[0];

      // file type is only image.
      if (/^image\//.test(file.type)) {
        saveImageToServer(file);
      } else {
        setError("Importer uniquement des images !");
      }
    };
  }

  function saveImageToServer(file: Blob) {
    if (!(file instanceof Blob)) return null;

    /*const fileRef = ref(storage, `articles/${v4()}`);
    uploadBytes(fileRef, file, {
      customMetadata: { owner: isOwner ? blog.createBy : null, admin: adminId },
    })
      .then((snap) =>
        getDownloadURL(snap.ref)
          .then((url) => insertImageToEditor(url))
          .catch((err) => setError("Echec de l'importation de l'image"))
      )
      .catch((err) => setError("Echec de l'importation de l'image"));*/
  }

  function insertImageToEditor(url: string) {
    if (!quill) return;
    // push image url to rich editor.
    const range = quill.getSelection();
    if (range) quill.insertEmbed(range.index, "image", url);
  }

  function handleSave() {
    if (!quill) return;

    if (article.content === JSON.stringify(quill.getContents())) return;
    setSaving(true);

    console.log("SAVING...");

    setSaving(false);
  }

  return (
    <div className="text-editor-container">
      <div ref={wrapperRef} />
      <Alert
        type="danger"
        message="Lorem ipsum dolor set alet, consectetur adiscipim elit."
      />
      <SubmitButton
        loading={saving}
        cannotSubmit
        text="Mettre à jour"
        handleClick={async () => {
          handleSave();
          //return pathname.replace(`/articles/${article.id}`)
        }}
      />
    </div>
  );
}

export default TextEditor;
