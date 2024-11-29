"use client";
import Link from "next/link";
import { serverActionSetsCookie } from "./route1/actions";

export const Action = ({ text, url }: { text: string; url: string }) => {
  return (
    <button
      className="bg-slate-800 border border-slate-400 p-2 mb-2"
      onClick={(e) => serverActionSetsCookie(text, url)}
    >
      Server action, sets cookie and redirects to next route!
    </button>
  );
};

export const Navigation = () => {
  return (
    <div className="flex gap-1">
      <Link
        href="/route2"
        className="bg-slate-400 border-slate-600 text-black p-2 mt-3"
      >
        route2
      </Link>
      <Link
        href="/route1"
        className="bg-slate-400 border-slate-600 text-black p-2 mt-3"
      >
        route1
      </Link>
    </div>
  );
};
