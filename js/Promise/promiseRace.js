// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("First promise resolved"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Second promise resolved"), 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Third promise resolved"), 3000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // Output: "First promise resolved" (since promise1 resolves first)
//   })
//   .catch((error) => {
//     console.error("Error encountered:", error);
//   });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise resolved"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Second promise rejected"), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third promise resolved"), 2000);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // This will not run because promise2 rejects first
  })
  .catch((error) => {
    console.error("Error encountered:", error); // Output: "Error encountered: Second promise rejected"
  });

//   ---------------------------------------------

const fetch = require("node-fetch"); // Assuming a Node.js environment

function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), timeout);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://api.example.com/data", 5000)
  .then((response) => response.json())
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error); // Output: "Error: Request timed out" if the fetch takes longer than 5 seconds
  });
