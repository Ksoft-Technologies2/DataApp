function recover(){
    const myInput = document.getElementById("myInput");
    const btnButton = document.getElementById("btnButton");

    if(myInput.value === ""){
        alert("Complete Field");
    }
    else{
        alert("Password Recovered SuccessFully, You can now go and input your new password");
        window.location = '../login.html'
    }
}