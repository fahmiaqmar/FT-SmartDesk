


function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



if(user=="admin" && pass=="123456"){


localStorage.setItem(
"login",
"true"
);


window.location="dashboard.html";


}

else{


alert("Username atau password salah");


}


}


function logout(){

localStorage.removeItem("login");

window.location="index.html";

}
