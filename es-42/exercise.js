let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

//otra forma que me dio el mismo resultado:

// let user = {
//   name: "Cosimo",
//   age: 30,
// };

// let newUser = Object.assign({}, user);

// newUser.name = "Paolo";

// console.log(newUser);
// console.log(user);