// alert(" Click ok to access this website !");
function getvalue() {
    var email ="example@gmail.com";
    var password ="12345";
    var  x = document.getElementById('email').value;
    var  y = document.getElementById('password').value;
    if(email === x && password === y){
        location.href='dashboard.html';
    } 
}