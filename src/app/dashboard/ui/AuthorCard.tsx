import { Link } from "@mui/icons-material";
import React from "react";

export default function AuthorCard(props: {
  pseudo: string;
  avatar: string;
  joinAt: string;
}) {
  return (
    <div className="w-72 bg-white flex flex-col justify-center items-center p-4 rounded shadow gap-4">
      <img
        src={props.avatar}
        alt={"Avatar - " + props.pseudo}
        className="w-20 h-20 rounded-full shadow "
      />
      <span className="text-slate-700 text-lg capitalize">{props.pseudo}</span>
      <span className="text-slate-500">{props.joinAt}</span>
      <a
        href={`http://localhost:3000/account/profile?ref=${props.pseudo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[--primary-color] px-3 capitalize font-semibold"
      >
        <span>bio</span>
        <Link />
      </a>
      <div className="flex items-center justify-between gap-2">
        <button className="px-4 py-1.5 rounded-3xl text-white bg-green-500">
          Accepter
        </button>
        <button className="px-4 py-1.5 rounded-3xl text-white bg-red-500">
          Rejetter
        </button>
      </div>
    </div>
  );
}
