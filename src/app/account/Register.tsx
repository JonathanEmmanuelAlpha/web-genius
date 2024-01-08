"use client";

import Input from "@/components/form/Input";
import React, { useState } from "react";
import SubmitButton from "@/components/form/SubmitButton";
import Linking from "./ui/Linking";
import { signup } from "@/services/auth.service";
import { ALLOWED_METHOD, AUTH_FORM_NAMES } from "@/utils/contants";
import Alert from "@/components/form/Alert";
import { useSearchParams } from "next/navigation";
import { ApiResponseType } from "@/models/response-api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResponse(null);
    setLoading(true);

    signup(email, password, passwordConf)
      .then((res) => {
        setLoading(false);
        setResponse(res);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="text-center text-2xl text-[--primary-color] m-0 mb-8">
        S'inscrire
      </h1>
      <form onSubmit={handleSubmit} method={ALLOWED_METHOD.POST}>
        <Input
          id={AUTH_FORM_NAMES.email}
          label="Addresse mail"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id={AUTH_FORM_NAMES.password}
          label="Mot de passe"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          id={AUTH_FORM_NAMES.passwordConf}
          label="Confirmer le mot de passe"
          required
          type="password"
          value={passwordConf}
          onChange={(e) => setPasswordConf(e.target.value)}
        />

        {response != null && (
          <Alert
            message={response.message}
            type={response.type == ApiResponseType.ERROR ? "danger" : "success"}
          />
        )}

        <SubmitButton text="S'inscrire" loading={loading} />

        <Linking login activation />
      </form>
    </>
  );
}
