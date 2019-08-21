
function pickRandom(arr) {
  console.log('function pickRandom()- helpers.js');
  return arr[Math.floor(Math.random() * arr.length)];
}

export {pickRandom};