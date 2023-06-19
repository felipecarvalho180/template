import { authOptions } from "@/server/authOptions";
import { request } from "@/server/http";
import { serverErrorHandler } from "@/utils";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data } = await request.get("users");

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return serverErrorHandler(error);
  }
}
