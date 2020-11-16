const fakeDbCall = require('./fakeDbCall');

// async/await handle promise
const asyncFunction = async () => {
  let awaitedResult = await fakeDbCall('c'); // return a promise
  console.log('awaited result: ', awaitedResult);
};
asyncFunction();

console.log('moving on');
