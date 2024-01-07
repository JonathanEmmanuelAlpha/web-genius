"use client";

import React, { useState } from "react";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";
import Linking from "./ui/Linking";
import { ALLOWED_METHOD, AUTH_FORM_NAMES } from "@/utils/contants";
import { LINKS } from "./page";
import { login } from "@/services/auth.service";
import Alert from "@/components/form/Alert";
import { ApiResponse, ApiResponseType } from "@/models/response-api";
import { useAuth } from "@/contexts/AuthProvider";

export default function Login() {
  const { updateToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password).then((res) => {
      setResponse(res);
      updateToken(res.message);
    });
  };

  return (
    <>
      <h1 className="text-center text-2xl text-[--primary-color] m-0 mb-8">
        Se connecter
      </h1>
      <form onSubmit={handleSubmit} method={ALLOWED_METHOD.POST}>
        <Input
          type="email"
          label={"Adresse email"}
          id="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="">
          <Link
            className="block w-full text-blue-500 ml-2 text-sm pr-2 text-end hover:text-blue-700 duration-200"
            href={`/account?action=${LINKS.forgotPass}`}
          >
            Mot de passe oublié ?
          </Link>
          <Input
            type="password"
            label="Mot de passe"
            id={AUTH_FORM_NAMES.password}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {response != null && (
          <Alert
            message={response.message}
            type={
              response.status == ApiResponseType.ERROR ? "danger" : "success"
            }
          />
        )}

        <SubmitButton text="Connection" />

        <Linking signin activation />
      </form>
    </>
  );
}
