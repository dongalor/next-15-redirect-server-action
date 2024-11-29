"use server";
import Link from "next/link";
import Action from "../components";
import { readServerCookie } from "./actions";

const Page = async () => {
  const cookie = await readServerCookie();

  return (
    <div>
      <Action text="route2" url="/route1" />
      <p className="my-3">{JSON.stringify(cookie)}</p>
      <Link
        href="/route1"
        className="bg-slate-400 border-slate-600 text-black p-2 mt-3"
      >
        user1
      </Link>
    </div>
  );
};

export default Page;
