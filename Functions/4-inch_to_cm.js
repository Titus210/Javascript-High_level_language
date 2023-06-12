function cm_to_inch(length){
    return length/2.54
}

function inch_to_cm(length)
{
    return length * 2.54;
}

function convert(fn,length){
    return fn(length);
}

let inches = convert(cm_to_inch,10);
console.log(inches);

let cm = convert(inch_to_cm, 10);
console.log(cm);