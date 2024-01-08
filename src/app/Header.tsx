"use client";

import AccountLink from "@/components/navigation/AccountLink";
import Navbar from "@/components/navigation/Navbar";
import AuthProvider from "@/contexts/AuthProvider";
import React from "react";

export default function Header() {
  return (
    <AuthProvider>
      <header className="w-full h-[--header-height] flex items-center justify-between bg-slate-50 p-3 shadow-sm sticky top-0 z-50">
        <span className="uppercase text-xl font-semibold">
          Web
          <span className="text-[--primary-color]">Genius</span>
        </span>

        <div className="flex items-center gap-4">
          <Navbar></Navbar>
          <AccountLink />
        </div>
      </header>
    </AuthProvider>
  );
}
