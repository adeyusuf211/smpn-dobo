import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get("search") ?? "";
  const api = await fetch(`${process.env.ROOT_API_URL}/books/list`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await api.json();

  return NextResponse.json({ response });
}
