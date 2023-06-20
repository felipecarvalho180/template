import { dynamicRequest } from "@/server/http/dynamic";
import { serverErrorHandler } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization");

  try {
    const { data } = await dynamicRequest.get("users", {
      headers: {
        Authorization: token,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return serverErrorHandler(error);
  }
}
