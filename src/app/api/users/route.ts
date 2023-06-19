import { request } from "@/server/http";
import { serverErrorHandler } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await request.get("users");

    return NextResponse.json(data);
  } catch (error) {
    return serverErrorHandler(error);
  }
}
