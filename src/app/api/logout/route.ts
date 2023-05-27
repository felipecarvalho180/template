import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  cookies().set("token", "");

  return NextResponse.redirect("http://localhost:3000/login", {
    headers: {
      "Set-Cookie": `expiredToken=true; HttpOnly; Path=/; Expires=${new Date(
        Date.now() + 10000
      ).toUTCString()};`,
    },
  });
}
