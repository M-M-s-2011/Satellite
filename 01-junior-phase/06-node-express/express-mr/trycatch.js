function sometimesBreaks() {
  if(Math.random() < 0.5) {
    throw new Error('oh noes');
  } else {
    return 'REAL DATA';
  }
}

try {
  // this part always happens
  sometimesBreaks(); // could throw an error
  sometimesBreaks(); // could throw an error
  let result = sometimesBreaks(); // <<<<<<<<< catch(result)
  sometimesBreaks(); // could throw an error
  sometimesBreaks(); // could throw an error
}
catch (err) {
  console.log('something went wrong:', err);
  // send file for an error page html
}


