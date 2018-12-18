function randomWait(start, finish) {
  return new Promise(function(resolve, reject) {
    let time = Math.floor(Math.random() * finish) + start;

    setTimeout(function() {
      resolve(time);
    }, time * 1000);
  });
}

randomWait(1, 3)
  .then(timeWaited => {
    console.log('This took ' + timeWaited + ' seconds!');
  });