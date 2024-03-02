function login(){
    const myInput = document.getElementById("myInput");
    const btnButton = document.getElementById("btnButton");
    
    
    if(myInput.value === ""){
        alert("Input Password")
    }
    else{
        alert("Login Sucessful")
        window.location = '../home.html'
    }
}