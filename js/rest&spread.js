console.log("heelo");

//es6
//Rest
function addNumber(a, b, c, ...other) {
  console.log(other, "other");
  return a + b + c;
}

const res = addNumber(2, 5, 6, 7, 78.7);

console.log(res, "rest");

//spread operator

var name = ["Code", "Web", "Male"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}

getNames(...name);
getNames(name[1], name[2], name[3]);

const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(...aboutMe, "aboutme\n", ...myName, "myname");

// The invocation above will return:
// ["Oluwatobi", "Sofela", "is", "my", "name."];

//OBJECT

const myNames = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  age: 23,
};
const bio = { ...myNames };
const { ...rest } = bio;
console.log(rest);
bio.firstName = "tobi";
console.log(myNames);
console.log(bio);

//spread

var newData = {
  ...myNames,
  age: 25,
};

console.log(newData, "newData");
