import { request } from "@/server";
import { sleep } from "@/utils/helpers/sleep";
import { AxiosError } from "axios";

import { NextResponse } from "next/server";

const memories = [
  { name: "Mock name", description: "Mock description" },
  { name: "Mock name 1", description: "Mock description 1" },
];

export async function GET() {
  try {
    // const { data } = await request.get("/memories");
    sleep(1500);
    const data = memories;

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
