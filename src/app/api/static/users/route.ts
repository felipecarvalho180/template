import { staticRequest } from "@/server/http";
import { serverErrorHandler } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await staticRequest.get("users");

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return serverErrorHandler(error);
  }
}
