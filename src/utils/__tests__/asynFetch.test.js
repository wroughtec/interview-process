import fetchMock from 'fetch-mock';
import { asyncFetch } from 'utils/asyncFetch';
import { endpoint } from 'consts/apiEndpoints';

fetchMock.get(endpoint, JSON.stringify({ status: `Ok` }));

describe(`Mocking fetch`, () => {
  test(`fails with synchronous code`, () => {
    const responseJson = asyncFetch(endpoint);
    expect(responseJson).not.toHaveProperty(`status`, `Ok`);
  });

  test(`using promises`, () => {
    expect.assertions(1);
    return asyncFetch(endpoint).then(responseJson => {
      expect(responseJson).toHaveProperty(`status`, `Ok`);
    });
  });

  test(`using async/await`, async () => {
    const responseJson = await asyncFetch(endpoint);
    expect(responseJson).toHaveProperty(`status`, `Ok`);
  });

  test('the fetch fails with an error', async () => {
    try {
      await asyncFetch('test/error');
    } catch (e) {
      expect(e).toBe(e);
    }
  });
});
