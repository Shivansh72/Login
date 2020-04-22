let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmpass=document.getElementById("confirm");
const Name="Shivansh_Saxena";
const pass="LearningWebD";
function validatorForm() {
    if(username.value === "") {
        document.getElementById("error").innerHTML="Username required";
        username.style.border= "red solid";
        return false;
    }
    else if(password.value === "") {
        document.getElementById("error").innerHTML="Password required";
        username.style.border= "green solid";
        password.style.border= "red solid";
        return false;
    }
    else if(confirmpass.value === "") {
        document.getElementById("error").innerHTML="*Confirm your Password";
        username.style.border= "green solid";
        password.style.border= "green solid";
        confirmpass.style.border= "red solid";
        return false;
    }
    else {
        username.style.border= "green solid";
        password.style.border= "green solid";
        confirmpass.style.border= "green solid";
        if(password.value.length<8){
        document.getElementById("error").innerHTML="";
        alert("password must atleast be of 8 characters");
        return false ;
    }
    else if(password.value!=confirmpass.value){
        alert("password didn't matched!!!  \nPlease try again");
        return false ;
    }
    else if(username.value === Name && password.value === pass){
        alert("Log In Successfull");
        return true;
    }
    else {
        alert("no user found!, please enter valid details \nto get one time access, go to user icon");
    return false;
    }
 }
