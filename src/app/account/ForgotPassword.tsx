"use client";

import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <>
      <h1 className="text-center text-xl text-[--primary-color] m-0 mb-8">
        Vous avez oubliez votre mot de passe ?
      </h1>
      <form>
        <Input
          type="email"
          label="Adresse email"
          id="email"
          required
          value={email}
          maxChar={50}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton text="Démarer" />
      </form>
    </>
  );
}
