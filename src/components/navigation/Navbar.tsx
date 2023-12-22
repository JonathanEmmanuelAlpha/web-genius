import React from "react";
import AppLink from "./AppLink";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li>
          <AppLink url="/">Accueil</AppLink>
        </li>
        <li>
          <AppLink url="/dashboard">Dashboard</AppLink>
        </li>
      </ul>
    </nav>
  );
}
