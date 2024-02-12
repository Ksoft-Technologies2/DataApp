const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click",(e)=>{login(e)})
function login(e){ 
    e.preventDefault()

    const inputParent = document.querySelector("#inputParent")
    const btn = document.querySelector(".btn")
    if(inputParent.value === ""){
        alert("Input a Password")
    }
    else{
        alert("Successfully Login")
        alert("Welcome. All services are going smoothly. For any issue contact support 09018136859(Whatsapp only)")
        window.location = '../Homepage.html'
    }
}