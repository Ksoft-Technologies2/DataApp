function save(){
    const myInput = document.getElementById("myInput");
    const btnButton = document.getElementById("btnButton");

    if(myInput.value === ""){
        alert("Field Not Completed, Please Complete It");
    }
    else{
        alert("Account Created SuccessFully");
        window.location = '../home.html'
    }
}