const googleDatabase = [
  'https://drinkhalfday.com',
  'https://www.espn.com',
  'https://github.com/jesterb0206',
  'https://www.udemy.com',
  'https://wearebreakfast.com',
  'https://zerotomastery.io/career-paths/',
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('com', googleDatabase));

module.exports = googleSearch;
