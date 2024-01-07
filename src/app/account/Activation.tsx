"use client";
import React, { useState } from "react";
import Input from "@/components/form/Input";
import Link from "next/link";
import SubmitButton from "@/components/form/SubmitButton";
import Linking from "./ui/Linking";

export default function Activation() {
  const [actif, setActif] = useState("");

  return (
    <>
      <form>
        <h1 className="text-center text-xl text-[--primary-color] m-0 mb-8">
          Activater mon compte
        </h1>
        <Input
          id="email"
          label="Adresse mail"
          required
          type="email"
          value={actif}
          onChange={(e) => setActif(e.target.value)}
        />

        <SubmitButton text="Démarer" />

        <Linking login signin />
      </form>
    </>
  );
}
