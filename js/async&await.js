// Async JS
// callback, promises, Async and await

const data = [
  { name: "anu", profession: "sde" },
  { name: "anuj", profession: "sde" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

// function createData(newData, callback) {
//   setTimeout(() => {
//     data.push(newData);
//     callback();
//   }, 5000);
// }

function createDatas(newData) {
  return new Promise((resolove, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolove();
      } else {
        reject("kuch galat hai");
      }
    }, 5000);
  });
}

// getData();
// createData({ name: "shiv", profession: "sde" }, getData);
// createDatas({ name: "shiv", profession: "sde" }.then(getData));

async function start() {
  await createDatas({ name: "shiva", profession: "sde" });
  getData();
}

start();
