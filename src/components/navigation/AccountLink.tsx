"use client";

import Link from "next/link";
import React from "react";
import ProgressBar from "../form/ProgressBar";
import Account from "./Account";
import { LINKS } from "@/app/account/page";

export default function AccountLink() {
  let user = null;

  if (false) {
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
      {!user && (
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

      {user && (
        <>
          <Link
            className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-transparent bg-red-500
             text-slate-50 hover:bg-transparent hover:text-red-500 hover:border-red-500
          "
            href={"/account?action=logout"}
          >
            Se déconnecter
          </Link>
        </>
      )}
    </div>
  );
}
