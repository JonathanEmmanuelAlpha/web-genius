"use client";

import Input from "@/components/form/Input";
import React, { useState } from "react";
import SubmitButton from "@/components/form/SubmitButton";
import Linking from "./ui/Linking";
import { signup } from "@/services/auth.service";
import { ALLOWED_METHOD, AUTH_FORM_NAMES } from "@/utils/contants";
import Alert from "@/components/form/Alert";
import { useSearchParams } from "next/navigation";

export default function Register() {
  const params = useSearchParams();
  const message = params.get("message");
  const status = params.get("status");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passer, setPasser] = useState("");

  return (
    <>
      <h1 className="text-center text-2xl text-[--primary-color] m-0 mb-8">
        S'inscrire
      </h1>
      <form action={signup} method={ALLOWED_METHOD.POST}>
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Input
          id={AUTH_FORM_NAMES.passwordConf}
          label="Confirmer le mot de passe"
          required
          type="password"
          value={passer}
          onChange={(e) => setPasser(e.target.value)}
        />

        {message && status && (
          <Alert
            message={message}
            type={parseInt(status) === 200 ? "success" : "danger"}
          />
        )}

        <SubmitButton text="S'inscrire" />

        <Linking login activation />
      </form>
    </>
  );
}
