const combine = (...args) =>{
    return args.reduce(function (prev, curr) {
        return prev+ ' ' + curr;
    });
};

let message = combine("Javascript", "Rest", "Parameters");
console.log(message);
