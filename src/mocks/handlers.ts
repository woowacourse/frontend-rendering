import { rest } from 'msw';
import DICTIONARY_DATA from './fixtures/dictionary';

const DICT = '*/dictionary-plants';

const handlers = [
  rest.get(DICT, (req, res, ctx) => {
    const target = req.url.searchParams.get('name') ?? '';
    const searchResult = DICTIONARY_DATA.filter(({ name }) => name.includes(target)).map(
      ({ id, name, image }) => ({ id, name, image })
    );

    return res(ctx.delay(200), ctx.status(200), ctx.json({ data: searchResult }));
  }),

  rest.get(`${DICT}/:id`, (req, res, ctx) => {
    const { id } = req.params;

    if (Number(id) > DICTIONARY_DATA.length) {
      return res(ctx.delay(200), ctx.status(404));
    }

    const data = DICTIONARY_DATA.find(({ id: databaseId }) => databaseId.toString() === id);

    return res(ctx.delay(200), ctx.status(200), ctx.json(data));
  }),

  rest.get('/members/me', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(401), ctx.json({ message: '만료된 세션입니다.' }));
  }),
];

export default handlers;
