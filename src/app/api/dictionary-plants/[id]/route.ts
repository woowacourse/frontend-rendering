import { DICTIONARY_PLANT_DATA } from "../../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const data = { ...DICTIONARY_PLANT_DATA[id % 2], id };

  return Response.json(data);
}
