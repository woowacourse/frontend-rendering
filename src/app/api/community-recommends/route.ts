import { NextResponse } from "next/server";
import getRecommendedTripsData from "../../../mocks/recommendedTripsData";

export async function GET() {
  const getCommunityData = getRecommendedTripsData.getData();

  return NextResponse.json(getCommunityData);
}
