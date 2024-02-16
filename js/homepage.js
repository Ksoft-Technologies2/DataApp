function alerting(){
    alert("Welcome. All services are going smoothly. For any issue contact support 09018136859(Whatsapp only)")
}
setTimeout(alerting,10000)
function displayTime(){
    const date = new Date();
    document.getElementById("demo").innerHTML = date.getHours() +":" + date.getMinutes()+ ":" + date.getSeconds()
}

setInterval(displayTime,1000)