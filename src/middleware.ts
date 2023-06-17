import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ROUTES } from "./utils";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const publicRoutes = [ROUTES.LOGIN, ROUTES.FORGOT, ROUTES.SIGN_UP];
  const isPublicRoute = publicRoutes.find((route) =>
    request.url.includes(route)
  );

  const privateUrlDefault = new URL("/", request.url);
  const publicUrlDefault = new URL("/login", request.url);

  if (token && !!isPublicRoute) {
    return NextResponse.redirect(privateUrlDefault);
  }

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(publicUrlDefault);
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
