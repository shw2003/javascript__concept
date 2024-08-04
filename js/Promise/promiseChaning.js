function firstAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First function completed");
      resolve("Data from first function");
    }, 1000);
  });
}

function secondAsyncFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second function completed with data:", data);
      resolve("Data from second function");
    }, 1000);
  });
}

function thirdAsyncFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Third function completed with data:", data);
      resolve("Data from third function");
    }, 1000);
  });
}

firstAsyncFunction()
  .then((result) => {
    return secondAsyncFunction(result);
  })
  .then((result) => {
    return thirdAsyncFunction(result);
  })
  .then((result) => {
    console.log("All functions completed. Final data:", result);
  })
  .catch((error) => {
    console.error("Error encountered:", error);
  });
