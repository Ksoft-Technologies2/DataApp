const createBtn = document.getElementById("createBtn");


createBtn.addEventListener("click",(e)=>{create(e)})
function create(e){
    e.preventDefault()

    const firstInputParent = document.querySelector("#firstInputParent")
    const secondInputParent = document.querySelector("#secondInputParent")
    const thirdInputParent = document.querySelector("#thirdInputParent")
    const fourthInputParent = document.querySelector("#fourthInputParent")
    const fifthInputParent = document.querySelector("#fifthInputParent")
    const btn = document.querySelector(".btn")
    
    if(firstInputParent.value === ""){
        alert("Field has to be Completed")
    }
    else if(secondInputParent.value === ""){
        alert("Field has to be Completed")
    }
    else if(thirdInputParent.value === ""){
        alert("Field has to be Completed")
    }
    else if(fourthInputParent.value === ""){
        alert("Field has to be Completed")
    }
    else if(fifthInputParent.value === ""){
        alert("Field has to be Completed")
    }
    else{
        alert("Account Created Successfully")
        window.location = '../Homepage.html'
    }
}