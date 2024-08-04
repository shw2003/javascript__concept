new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // Step 1
})
  .then(function (result) {
    console.log(result); // Step 2: console.logs 1
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000); // Step 3
    });
  })
  .then(function (result) {
    console.log(result); // Step 4: console.logs 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000); // Step 5
    });
  })
  .then(function (result) {
    console.log(result); // Step 6: console.logs 4
  });
