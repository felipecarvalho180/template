import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const expiredToken = request.cookies.get("expiredToken")?.value;
  const homeUrl = "http://localhost:3000/";
  const loginUrl = "http://localhost:3000/login";

  if (token && request.url !== homeUrl) {
    return NextResponse.redirect(homeUrl);
  }
  if (!token && request.url !== loginUrl && !expiredToken) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  if (expiredToken && request.url !== loginUrl) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  // const response = NextResponse.next();

  // return response;
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-hello-from-middleware1", "hello");

  // // You can also set request headers in NextResponse.rewrite
  // const response = NextResponse.next({
  //   request: {
  //     // New request headers
  //     headers: requestHeaders,
  //   },
  //   headers: requestHeaders,
  // });

  // // Set a new response header `x-hello-from-middleware2`
  // response.headers.set("x-hello-from-middleware2", "hello");
  // response.cookies.set("teste", "teste");

  // console.log(response.headers);
  // return response;
}

export const config = {
  matcher: ["/", "/login"],
};
