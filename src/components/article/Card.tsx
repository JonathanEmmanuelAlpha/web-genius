import Link from "next/link";
import React from "react";

export default function Card(props: {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  pubAt: string;
  readers: number;
}) {
  return (
    <Link
      href={`/articles/${props.id}`}
      className="w-[320px] bg-white shadow flex flex-col gap-4 rounded"
    >
      <img
        src={props.thumbnail}
        alt={`${props.title} - thumbnail`}
        className="w-full h-48 rounded-t"
      />
      <span className="px-4 text-lg text-slate-700 capitalize font-semibold">
        {props.title}
      </span>
      <p className="px-4 text-slate-500 w-full">{props.description}</p>
      <div className="px-4 pb-4 flex items-center justify-between text-slate-500 text-sm font-semibold">
        <span>{props.pubAt}</span>
        <span>{props.readers} lecteurs</span>
      </div>
    </Link>
  );
}
