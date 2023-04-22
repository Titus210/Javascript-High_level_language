function Sum(...args) {
    return args
        .filter(function (e) {
            return typeof e === 'number';
        })
        .reduce(function (prev, curr) {
            return prev + curr;
        });
}

console.log(Sum(2, "Titus", 3, 5, 6))