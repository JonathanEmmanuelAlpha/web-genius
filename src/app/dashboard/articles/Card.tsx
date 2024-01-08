import Link from "next/link";
import React from "react";

export default function Card(props: {
  channel: string;
  order: number;
  title: string;
  createAt: string;
  reads: number;
  readTimer: number;
}) {
  return (
    <div
      className={`
        flex items-center justify-between px-4 py-3 text-slate-700 
        ${props.order % 2 === 0 ? "bg-slate-100" : "bg-white"}
    `}
    >
      <span className="">{props.order}</span>
      <span className="">{props.title}</span>
      <span className="">{props.createAt}</span>
      <span className="">{props.reads + " lecteurs"}</span>
      <span className="">{props.readTimer + "min"}</span>

      <div className="flex items-center gap-3">
        <button className="text-red-500">Supprimer</button>
        <Link
          className="text-blue-500"
          href={`/dashboard/creator?edition=${props.channel}`}
        >
          Editer
        </Link>
        <Link className="text-yellow-500" href={`/articles/${props.channel}`}>
          Lire
        </Link>
      </div>
    </div>
  );
}
