import { NextRequest, NextResponse } from "next/server";
import { clearCookies } from "@/utils/helpers/clearCookies";

export async function GET(request: NextRequest) {
  clearCookies();

  return NextResponse.redirect("http://localhost:3000/login", {
    headers: {
      "Set-Cookie": `expiredToken=true; HttpOnly; Path=/; Expires=${new Date(
        Date.now() + 1000
      ).toUTCString()};`,
    },
  });
}
