import { clearCookies } from "@/utils/helpers/clearCookies";
import { NextResponse } from "next/server";

export async function GET() {
  clearCookies();

  return NextResponse.redirect("http://localhost:3000/login");
}
