import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/movies', (req, res, ctx) => {
    return res(ctx.json({ movies: [{ id: 1, title: 'Inception', image: 'inception.jpg' }] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
