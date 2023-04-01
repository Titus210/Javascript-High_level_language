var a = " Hello";
first();

function first() {
    var b = "hi";
    second();
    function second() {
        var c = "Hey";
        third();
        function third() {
            console.log(a + " " + b + " " + c);
        }
    }
}
