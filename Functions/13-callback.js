function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}


function showOK(){
    console.log("You agreed");
}

function showCancel(){
    console.log("You canceled")
}

ask("Do you agree", showOK, showCancel)
