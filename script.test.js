const googleSearch = require('./script');

dbMock = [
  'https://drinkhalfday.com',
  'https://www.espn.com',
  'https://github.com/jesterb0206',
  'https://www.udemy.com',
  'https://wearebreakfast.com',
  'https://zerotomastery.io/career-paths/',
];

describe('Google Search Function', () => {
  it('My First Test', () => {
    expect('Hello World!').toBe('Hello World!');
  });

  it('It’s Running', () => {
    expect(googleSearch('git', dbMock)).toExist;
  });

  it('It’s Working', () => {
    expect(googleSearch('drink', dbMock)).toEqual(['https://drinkhalfday.com']);
  });

  it('It Works With Undefined and Null Inputs', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('It Returns No More Than 3 Matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
