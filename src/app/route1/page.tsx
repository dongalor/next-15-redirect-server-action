"use server";
import Link from "next/link";
import Action from "../components";
import { readServerCookie } from "../route2/actions";

const Page = async () => {
  const cookie = await readServerCookie();

  return (
    <div>
      <Action text="route1" url="/route2" />
      <p className="my-3">{JSON.stringify(cookie)}</p>
      <Link
        href="/route2"
        className="bg-slate-400 border-slate-600 text-black p-2 mt-3"
      >
        user2
      </Link>
    </div>
  );
};

export default Page;
