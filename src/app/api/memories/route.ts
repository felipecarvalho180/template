import { request } from "@/server";

import { NextResponse } from "next/server";

export async function GET() {
  const { data } = await request.get("/memories");

  return await NextResponse.json(data);
}
