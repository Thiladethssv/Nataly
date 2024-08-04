document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var validUsername = 'jxstin';
    var validPassword = '1234';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === validUsername && password === validPassword) {
        
       
        window.location.href = 'indexx.html';
    } 
    
    else {
      Swal.fire({
        icon: "error",
        title: "Try again ",
        text: "Username or Password is incorrect.",
      });
        
        errorMessage.textContent = 'Username or Password is incorrect.';
    }
});
