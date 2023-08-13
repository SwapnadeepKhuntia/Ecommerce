        let password=document.getElementById("password");
        let passeyeicon=document.getElementById("passeyeicon");

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