import { API } from "@/services/auth.service";
import React, { useEffect, useState } from "react";

export default function useAuthors(requested: boolean) {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!requested) return;

    setLoading(true);

    fetch(`${API}/auth/authors/requests`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (request) => {
        const res = await request.json();
        setAuthors(res);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [requested]);

  useEffect(() => {
    if (requested) return;

    setLoading(true);

    fetch(`${API}/auth/authors/all`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: {
        revalidate: 0,
      },
    })
      .then(async (request) => {
        const res = await request.json();
        setAuthors(res);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [requested]);

  return { authors, loading };
}
