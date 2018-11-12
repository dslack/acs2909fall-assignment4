/**
 * Lets generate several Fake Names...
 */

 const faker = require('faker');

 const names = Array.from({length: 10}, () => ({name: faker.name.findName(), title: faker.name.jobTitle(), id: Math.floor(Math.random()*50*1000)}));

// Lets get random words that we will fake...
module.exports = {
    names,
    randomName: () => {
        return names[Math.floor(Math.random()*names.length)];
    },
    randomWords: () => {
        return {id: names[Math.floor(Math.random()*names.length)].id, words: faker.hacker.phrase(), date: faker.date.recent(50)};
    }
}
