import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const homeUrl = "http://localhost:3000/";
  const loginUrl = "http://localhost:3000/login";

  if (token && request.url !== homeUrl) {
    return NextResponse.redirect(homeUrl);
  }

  if (!token && request.url !== loginUrl) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: ["/", "/login"],
};
