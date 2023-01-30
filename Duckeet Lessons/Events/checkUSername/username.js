
function checkUsername() {


    // check username length
    if (userName.value.length < 5){
        errorMessage.textContent = "Username Must be 5 characters or More";
        userName.style.backgroundColor = 'rgba(255, 255, 23)';
}
    else {
        errorMessage.textContent = '';
    }
}

var errorMessage = document.getElementById('feedback');
var userName = document.getElementById('username');