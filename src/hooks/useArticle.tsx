import { API } from "@/services/auth.service";
import React, { useEffect, useState } from "react";

export default function useArticle(
  all = true,
  channel = "",
  user: any = undefined
) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!all) return;

    setLoading(true);

    fetch(`${API}/articles/all`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (request) => {
        const res = await request.json();
        setArticles(res);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [all]);

  useEffect(() => {
    if (user == undefined) return;

    setLoading(true);

    fetch(`${API}/articles/author-articles`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-API-User": user.email },
    })
      .then(async (request) => {
        const res = await request.json();
        setArticles(res);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    if (channel == "" || typeof channel !== "string") return;

    setLoading(true);

    fetch(`${API}/articles/get/${channel}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (request) => {
        const res = await request.json();
        setArticle(res);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [channel]);

  return { articles, article, loading };
}
