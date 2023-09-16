import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log(request.url);
    return NextResponse.json(request.url);
  } catch (error) {
    return NextResponse.json("NOT OK");
  }
}
