"use client";
import { serverActionSetsCookie } from "./route1/actions";

const Action = ({ text, url }: { text: string; url: string }) => {
  return (
    <button
      className="bg-slate-800 border border-slate-400 p-2 mb-2"
      onClick={(e) => serverActionSetsCookie(text, url)}
    >
      Server action, sets cookie!
    </button>
  );
};

export default Action;
