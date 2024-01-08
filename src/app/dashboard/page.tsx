"use client";

import useAuthors from "@/hooks/useAuthors";
import AuthorCard from "./ui/AuthorCard";
import ProgressBar from "@/components/form/ProgressBar";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { API } from "@/services/auth.service";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { authors, loading } = useAuthors(true);
  const { currentUser, loadingUser } = useAuth();

  const [load, setLoad] = useState(false);

  function handleRequest(target: string, accepted: boolean) {
    if (!currentUser || loadingUser) return;

    setLoad(true);

    fetch(`${API}/auth/author-${accepted ? "accept" : "reject"}/${target}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-API-USER": currentUser.email,
      },
    })
      .then(async (request) => {
        const res = await request.json();
        setLoad(false);

        if (res.type == "ERROR") {
          toast.error(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        if (res.type == "SUCCESS") {
          toast.success(res.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        setLoad(false);
      });
  }

  return (
    <div className="max-w-[1024px] mx-auto my-0">
      <h2 className="text-center uppercase py-4 text-xl text-[--primary-color] font-medium">
        Demandes d'auteurs
      </h2>
      <div className="w-full my-2">
        <p className="max-w-[500px] shadow border bg-slate-50 text-slate-600 leading-7 p-4">
          Ci-dessous la listes de toutes les demandes d'auteurs n'ayant
          actuellement recues aucune réponses de la part des administrateurs.
        </p>
      </div>

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
              <AuthorCard
                key={index}
                avatar={author.picture}
                joinAt={author.createAt}
                pseudo={author.email}
                loading={load}
                onAccept={(e) => handleRequest(author.email, true)}
                onReject={(e) => handleRequest(author.email, false)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
