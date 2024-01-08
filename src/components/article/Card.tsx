import Link from "next/link";
import React from "react";

export default function Card(props: {
  channel: string;
  thumbnail: string;
  title: string;
  pubAt: string;
  readers: number;
}) {
  return (
    <Link
      href={`/articles/${props.channel}`}
      className="w-[320px] bg-white shadow flex flex-col gap-4 rounded"
    >
      <img
        src={props.thumbnail}
        alt={`${props.title} - thumbnail`}
        className="w-full h-48 rounded-t"
      />
      <span className="title-font px-4 text-xl text-slate-900 capitalize">
        {props.title}
      </span>
      <div className="px-4 pb-4 flex items-center justify-between text-slate-500 text-sm">
        <span>{props.pubAt}</span>
        <span>{props.readers} lecteurs</span>
      </div>
    </Link>
  );
}
