let users = [
  { name: "john", car: "BMW" },
  { name: "mark", car: "volvo" },
  { name: "phill", car: "audi" },
  { name: "japheth", car: "BMW" },
];

let user = users.map((user) => {
  return user.name
});

console.log(user);
