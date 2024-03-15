let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let updatetime = () =>{
    let currentTime = new Date;

// console.log(currentTime);
// console.log (currentTime.getHours());
// console.log (currentTime.getMinutes());
// console.log (currentTime.getSeconds());

// hrs.innerHTML = ('0' + currentTime.getHours()).slice(-2);
// min.innerHTML = ('0' + currentTime.getMinutes()).slice(-2);
// sec.innerHTML = ('0' + currentTime.getSeconds()).slice(-2);

hrs.innerHTML = (currentTime.getHours()<10?'0':'')+currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?'0':'')+currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?'0':'')+ currentTime.getSeconds();
}

setInterval(() => {
    updatetime();
}, 1000);