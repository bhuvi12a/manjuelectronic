import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("google-site-verification: google4ec9957734174401.html\n", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
