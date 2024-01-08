"use client";

import { createContext, useState } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, MoreVert } from "@mui/icons-material";

interface ContextType {
  expanded: boolean;
  active: string;
  update: (value: string) => void;
}

export const SidebarContext = createContext<ContextType>({
  active: "stats",
  expanded: true,
  update(value) {},
});

export default function SideBar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("");

  function update(value: string) {
    return setActive(value);
  }

  return (
    <aside className="ideal-h sticky top-[--header-height] z-40">
      <nav className="h-full flex flex-col bg-slate-50 border-r shadow-sm">
        <div
          className={`
            p-4 pb-2 flex justify-between items-center
            ${expanded ? "pl-7" : "pl-4"}
        `}
        >
          <span
            className={`
            uppercase text-slate-900 font-semibold
            overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}
          `}
          >
            Dash
            <span className="text-[--primary-color]">board</span>
          </span>
          <IconButton onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>

        <SidebarContext.Provider value={{ expanded, active, update }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}
