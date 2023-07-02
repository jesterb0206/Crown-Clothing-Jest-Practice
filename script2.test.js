const swapi = require('./script2');
const fetch = require('node-fetch');

describe('SWAPI', () => {
  it('Makes an API Call to Get People', () => {
    expect.assertions(1);

    return swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(87);
    });
  });

  it('Makes an API Call to Get People With a Promise', () => {
    expect.assertions(2);

    return swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  it('Get People Function Returns Both the Count and Results', () => {
    mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5],
          }),
      })
    );

    expect.assertions(4);

    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
