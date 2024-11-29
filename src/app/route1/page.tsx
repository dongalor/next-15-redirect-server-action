"use server";
import Link from "next/link";
import { readServerCookie } from "../route2/actions";
import { Action, Navigation } from "../components";

const Page = async () => {
  const cookie = await readServerCookie();

  return (
    <div>
      <Action text="cookie is set from route1" url="/route2" />
      <p className="my-3">{JSON.stringify(cookie)}</p>
      <Navigation />
    </div>
  );
};

export default Page;
