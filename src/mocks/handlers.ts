import { rest } from 'msw';
import runnerPostMock from './runnerPostMock.json';

export const handlers = [
  rest.get('*/posts/runner', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(runnerPostMock));
  }),
];
