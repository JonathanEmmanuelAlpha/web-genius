"use client";

import Link from "next/link";
import React from "react";
import ProgressBar from "../form/ProgressBar";
import Account from "./Account";
import { LINKS } from "@/app/account/page";
import { useAuth } from "@/contexts/AuthProvider";

export default function AccountLink() {
  const { currentUser, loadingUser, logout } = useAuth();

  if (loadingUser) {
    return (
      <div className="flex flex-wrap items-center justify-evenly gap-4">
        <ProgressBar
          progress={25}
          spinnerMode
          indicatorWidth={5}
          trackWidth={5}
          size={40}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4">
      {!currentUser && (
        <>
          <Link
            className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-[--primary-color] 
                text-[--primary-color] hover:bg-[--primary-color] hover:text-slate-50
          "
            href={`/account?action=${LINKS.signup}`}
          >
            S'inscrire
          </Link>
          <Link
            className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-transparent bg-[--primary-color]
             text-slate-50 hover:bg-transparent hover:text-[--primary-color] hover:border-[--primary-color]
          "
            href={`/account?action=${LINKS.login}`}
          >
            Se connecter
          </Link>
        </>
      )}

      {currentUser && (
        <>
          <Link
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-transparent bg-red-500
             text-slate-50 hover:bg-transparent hover:text-red-500 hover:border-red-500
          "
            href={"/account?action=logout"}
          >
            Se déconnecter
          </Link>
          <Link href={`/profile`} className="flex flex-col items-center">
            <img
              className="w-[35px] h-[35px] mb-1 rounded-full"
              src={currentUser.picture}
              alt={currentUser.pseudo}
            />
            <span className="text-sm text-slate-500">{currentUser.email}</span>
          </Link>
        </>
      )}
    </div>
  );
}
