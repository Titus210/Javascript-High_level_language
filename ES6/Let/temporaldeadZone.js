{
    // enter new scope
    let log = function(){
        console.log(message);
    };


    // This is the TDZ accessing log result to reference error

    // log(); // error
    
    let message = "hello"
    log();

}