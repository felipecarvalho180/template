import { request } from "@/server";
import { AxiosError } from "axios";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await request.get("/memories");

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        {},
        {
          status: error.response?.status,
          statusText: error.message,
        }
      );
    }
  }
}
