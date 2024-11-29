"use server";

import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const serverActionSetsCookie = async (text: string, url: string) => {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set("learn-redirect-nextjs", text);
  return redirect(url);
};
