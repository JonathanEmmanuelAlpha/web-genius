import Link from "next/link";
import React from "react";
import { LINKS } from "../page";

export default function Linking(props: {
  login?: boolean;
  signin?: boolean;
  activation?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 mt-4 text-sm text-slate-500">
      {props.login && (
        <div className="">
          <span>Vous avez déjà un compte ?</span>
          <Link
            className="text-blue-500 ml-2 hover:text-blue-700 duration-200"
            href={`/account?action=${LINKS.login}`}
          >
            Se connecter
          </Link>
        </div>
      )}
      {props.signin && (
        <div className="">
          <span>Vous n'avez pas de compte ?</span>
          <Link
            className="text-blue-500 ml-2 hover:text-blue-700 duration-200"
            href={`/account?action=${LINKS.signup}`}
          >
            S'inscrire
          </Link>
        </div>
      )}
      {props.activation && (
        <div className="">
          <span>Votre compte n'est pas activé ?</span>
          <Link
            className="text-blue-500 ml-2 hover:text-blue-700 duration-200"
            href={`/account?action=${LINKS.activation}`}
          >
            Activer mon compte
          </Link>
        </div>
      )}
    </div>
  );
}
