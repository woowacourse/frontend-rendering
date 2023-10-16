import DICTIONARY_DATA from 'fixtures/dictionary';

interface DictionaryPlantDetailRequestOptions {
  params: {
    id: string;
  };
}

export async function GET(request: Request, options: DictionaryPlantDetailRequestOptions) {
  const {
    params: { id },
  } = options;

  const dictId = Number(id);
  const data = DICTIONARY_DATA.find(({ id }) => id === dictId);

  if (data) {
    return Response.json(data);
  } else {
    return new Response('없어용', { status: 404 });
  }
}
