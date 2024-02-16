const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click",(e)=>{login(e)})
function login(e){ 
    e.preventDefault()

    const inputParent = document.querySelector("#inputParent")
    const btn = document.querySelector(".btn")
    if(inputParent.value === ""){
        alert("Input a Password")
    }
    else if (inputParent.value == 1){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 2){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 3){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 4){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 5){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 6){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 7){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 8){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 9){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == 10){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "a"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "b"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "c"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "d"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "e"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "f"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "g"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "h"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "i"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "j"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "k"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "l"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "m"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "n"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "o"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "p"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "q"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "r"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "s"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "t"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "u"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "v"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "w"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "x"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value == "y"){
        alert("Input a  Valid Password")
    }
    else if (inputParent.value === "z"){
        alert("Input a  Valid Password")
    }
    else{
        alert("Successfully Login")
        alert("Welcome. All services are going smoothly. For any issue contact support 09018136859(Whatsapp only)")
        window.location = '../Homepage.html'
    }
}