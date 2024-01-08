"use client";

import Alert from "@/components/form/Alert";
import ProgressBar from "@/components/form/ProgressBar";
import SubmitButton from "@/components/form/SubmitButton";
import { useAuth } from "@/contexts/AuthProvider";
import { ApiResponseType } from "@/models/response-api";
import { API } from "@/services/auth.service";
import { toast } from "react-toastify";
import { useState } from "react";

function Profile() {
  const { currentUser, loadingUser } = useAuth();

  const [loading, setLoading] = useState(false);

  function authorRequest() {
    if (!currentUser || loadingUser) return;

    setLoading(true);

    fetch(`${API}/auth/author-request/${currentUser.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (request) => {
        const res = await request.json();

        setLoading(false);

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
        setLoading(false);
      });
  }

  return (
    <div className="ideal-h w-full flex items-center justify-center">
      {!loadingUser && currentUser && (
        <div className="w-[320px] rounded bg-white shadow flex flex-col items-center gap-4 p-4">
          <img
            className="w-[150px] h-[150px] mb-1 rounded-full"
            src={currentUser.picture}
            alt={currentUser.pseudo}
          />
          <h1 className="text-xl text-slate-700">{currentUser.pseudo}</h1>
          <span className="text-lg text-slate-500">{currentUser.email}</span>
          <div className="flex items-center justify-center gap-2">
            {currentUser.role == "USER" && (
              <span className="font-bold bg-blue-600 text-white px-4 py-2 rounded">
                {currentUser.role}
              </span>
            )}
            {currentUser.role == "AUTHOR" && (
              <span className="font-bold bg-green-600 text-white px-4 py-2 rounded">
                {currentUser.role}
              </span>
            )}
            {currentUser.role == "ADMIN" && (
              <span className="font-bold bg-pink-600 text-white px-4 py-2 rounded">
                {currentUser.role}
              </span>
            )}
          </div>

          {currentUser.hasAuthorDemand == false &&
            currentUser.role != "AUTHOR" &&
            currentUser.role != "ADMIN" && (
              <SubmitButton
                text="Devenir Auteur"
                loading={loading}
                handleClick={authorRequest}
              />
            )}
        </div>
      )}
      {loadingUser && (
        <ProgressBar
          progress={25}
          spinnerMode
          indicatorWidth={5}
          trackWidth={5}
          size={40}
        />
      )}
    </div>
  );
}

export default Profile;
