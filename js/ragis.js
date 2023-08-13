
let password=document.getElementById("password");
let passeyeicon=document.getElementById("passeyeicon");
let confirm_password=document.getElementById("confirm_password");
let conpasseyeicon=document.getElementById("conpasseyeicon");
let phonenumber=document.getElementById("phonenumber");
let err=document.getElementById("err");

// using ragex
let passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm


passeyeicon.addEventListener("click",()=>{
    if(password.type == "password")
    {
        password.type="text";
        passeyeicon.classList.replace("fa-eye-slash","fa-eye");
    }
    else
    {
        password.type="password";
        passeyeicon.classList.replace("fa-eye","fa-eye-slash");
    }
})

conpasseyeicon.addEventListener("click",()=>{

if(confirm_password.type == "password")
    {
        confirm_password.type="text";
        conpasseyeicon.classList.replace("fa-eye-slash","fa-eye");
    }
    else
    {
        confirm_password.type="password";
        conpasseyeicon.classList.replace("fa-eye","fa-eye-slash");
    }
    
})

confirm_password.addEventListener("click",()=>{
 if(password.value == "")
 {
     err.innerText="Plese full fill Password";
     err.style.color="red";
     err.style.fontSize="20px";
     err.style.marginBottom="10px";
 }
 else if((passwordpattern.test(password.value)) == true)
{
    err.innerText="";
}
else if((passwordpattern.test(password.value)) == false)
{
    err.innerText="Enter Strong password ";
    err.style.color="red";
    err.style.fontSize="20px";
    err.style.marginBottom="10px";
}


})

phonenumber.addEventListener("click",()=>{
   if(confirm_password.value == password.value)
    {
        err.innerText="";
    }
    else
    {
        err.innerText="Password Not Mach";
        err.style.color="red";
        err.style.fontSize="20px";
        err.style.marginBottom="10px";
    }
})
