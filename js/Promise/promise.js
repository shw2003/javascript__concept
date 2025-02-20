let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })

  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })

  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 8
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 16
  })
  .catch((error) => console.log(error));
