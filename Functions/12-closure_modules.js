function User() {
    var username, password;
  
    function doLogin(usr, pswd) {
      username = usr;
      password = pswd;
  
      // login work
      if (username === "fred") {
        console.log("Valid username");
      } else {
        console.log("Invalid username");
      }
  
      if (password === "12fred") {
        console.log("Valid password");
      } else {
        console.log("Invalid password");
      }
  
      if (username === "fred" && password === "12fred") {
        console.log("Login successful");
      } else {
        console.log("Error: Invalid username or password");
      }
    }
  
    var publicAPI = {
      login: doLogin,
    };
  
    return publicAPI;
  }
  
  var fred = User();
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("Enter your username: ", (user_name) => {
    rl.question("Enter your password: ", (user_pass) => {
      fred.login(user_name, user_pass);
      rl.close();
    });
  });
  
  console.log();
  