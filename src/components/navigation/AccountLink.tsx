import Link from "next/link";
import React from "react";

export default function AccountLink() {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4">
      <Link
        className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-[--primary-color] 
                text-[--primary-color] hover:bg-[--primary-color] hover:text-slate-50
          "
        href={"/account?action=sign-up"}
      >
        S'inscrire
      </Link>
      <Link
        className="
                w-max block px-4 py-2 rounded-full text-center border-2 border-transparent bg-[--primary-color]
             text-slate-50 hover:bg-transparent hover:text-[--primary-color] hover:border-[--primary-color]
          "
        href={"/account?action=login"}
      >
        Se connecter
      </Link>
    </div>
  );
}
