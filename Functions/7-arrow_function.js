let show = function () {
  console.log("Anonymus");
};

let anony_show = () => console.log("Showing -> anonymus ");

anony_show();
show();

/* add some arrow */
let add = function (a, b) {
  return a + b;
};

let add_arrow = (a, b) => {
  return a + b;
};

console.log(add(2,2))
console.log(add_arrow(2,4))