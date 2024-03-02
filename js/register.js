const RegisterBtn = document.getElementById("RegisterBtn");


RegisterBtn.addEventListener("click",(e)=>{Register(e)})
function Register(e){ 
    e.preventDefault()
    window.location = '../register.html'
    }