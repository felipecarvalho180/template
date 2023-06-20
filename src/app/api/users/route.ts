import { dynamicRequest } from "@/server/http/dynamic";
import { serverErrorHandler } from "@/utils";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data } = await dynamicRequest.get("users");

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return serverErrorHandler(error);
  }
}
