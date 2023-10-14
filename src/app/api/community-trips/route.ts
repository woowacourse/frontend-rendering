import { NextResponse } from "next/server";

import communityTripsData from "../../../mocks/communityTripsData";

export async function GET() {
  const getCommunityData = communityTripsData.getData();

  return NextResponse.json(getCommunityData);
}
