const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Second promise resolved"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Third promise resolved"), 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: ["First promise resolved", "Second promise resolved", "Third promise resolved"]
  })
  .catch((error) => {
    console.error("Error encountered:", error);
  });

//   -------------------------------------------------------------

import fetch from "node-fetch"; // Assuming a Node.js environment

const api1 = fetch("https://api.example.com/data1");
const api2 = fetch("https://api.example.com/data2");
const api3 = fetch("https://api.example.com/data3");

Promise.all([api1, api2, api3])
  .then((responses) => {
    // Ensure all responses are successful
    return Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error("API error");
        }
        return response.json();
      })
    );
  })
  .then((data) => {
    console.log(data); // Output: Array of JSON data from all APIs
  })
  .catch((error) => {
    console.error("Error encountered:", error); // Output: Error if any of the APIs fail
  });
