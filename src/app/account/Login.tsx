"use client";

import React, { useState } from "react";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-center text-2xl text-[--primary-color] m-0 mb-8">
        Se connecter
      </h1>
      <form action="" method="">
        <Input
          type="email"
          label="Adresse email"
          id="email"
          required
          value={email}
          maxChar={50}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="">
          <Link
            className="block w-full text-blue-500 ml-2 text-sm pr-2 text-end hover:text-blue-700 duration-200"
            href={"/account?action=forgot-password"}
          >
            Mot de passe oublié ?
          </Link>
          <Input
            type="password"
            label="Mot de passe"
            id="password"
            required
            value={password}
            maxChar={50}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <SubmitButton text="Connection" />
      </form>
    </>
  );
}
