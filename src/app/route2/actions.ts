import { cookies } from "next/headers";

export const readServerCookie = async () => {
  "use server";
  const cookieStore = await cookies();
  const cookie = cookieStore.get("learn-redirect-nextjs");

  if (!cookie) return "no cookie";

  return cookie;
};
