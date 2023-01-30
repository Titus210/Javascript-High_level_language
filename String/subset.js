var name = "dog";
substring = []
substring = []
i = 0

// d
substring.push(name[i]);
// do
substring.push(name[i] + name[i + 1])
// dog
substring.push(name[i] + name[i + 1] + name[i + 2])

// o
substring.push(name[name.length - 2])
// og
substring.push(name[name.length - 2] + name[name.length - 1])
// g
substring.push( name[name.length - 1])



console.log(substring)