import Link from "next/link";
import React from "react";

export default function AppLink(props: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={props.url}
      aria-disabled
      className="block px-4 py-2 text-slate-800 capitalize"
    >
      {props.children}
    </Link>
  );
}
