function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;
      console.log("Baz function");
      console.log(a, b, c);
    }
    console.log("Bar function");
    console.log(a, b);
    baz();
  }
  console.log("Foo function");
  console.log(a);
  bar();
}

foo();
