"use client";

import { useContext } from "react";
import { SidebarContext } from "./SideBar";
import Link from "next/link";

export default function SidebarItem(props: {
  url: string;
  icon: React.ReactNode;
  text: string;
  alert?: boolean;
}) {
  const { expanded, active, update } = useContext(SidebarContext);

  return (
    <li onClick={() => update(props.url)}>
      <Link
        href={`/dashboard/${props.url}`}
        className={`
        relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active === props.url
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-slate-600"
        }
    `}
      >
        {props.icon}
        <span
          className={`
            overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}
          `}
        >
          {props.text}
        </span>
        {props.alert && (
          <div
            className={`
            absolute right-2 w-2 h-2 rounded bg-red-400
            ${expanded ? "" : "top-2"}
        `}
          />
        )}

        {!expanded && (
          <div
            className="
            absolute left-full rounded px-2 py-1 ml-6 w-max 
            bg-indigo-50 text-indigo-800 text-sm
            invisible opacity-50 -translate-x-3 transition-all
            group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
        "
          >
            {props.text}
          </div>
        )}
      </Link>
    </li>
  );
}
