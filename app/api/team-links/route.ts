import teamLinkData from "@/mocks/link";
import { NextResponse } from "next/server";

export async function GET() {
  const teamLinks = teamLinkData.getData();
  return NextResponse.json(teamLinks);
}
