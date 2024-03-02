const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click",(e)=>{login(e)})
function login(e){ 
    e.preventDefault()
    window.location = '../login.html'
    }