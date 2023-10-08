import { rest } from 'msw';
import SEARCH_DATA from './fixtures/search';

const DICT = '*/dictionary-plants';

const handlers = [
  rest.get(DICT, (req, res, ctx) => {
    const target = req.url.searchParams.get('name') ?? '';
    const searchResult = SEARCH_DATA.filter(({ name }) => name.includes(target));

    return res(ctx.delay(200), ctx.status(200), ctx.json({ data: searchResult }));
  }),
];

export default handlers;
