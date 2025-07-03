const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// change 1
(()=>{
     const date = new Date().toDateString();
     const obj = date.split(" ");
     document.querySelector(".day").textContent = obj[0];
     document.querySelector(".month").textContent = obj[1];
     document.querySelector(".day-number").textContent = obj[2];
     document.querySelector(".year").textContent = obj[3];
})();

// change 2
function updateClock(){
     const time =new Date().toTimeString().split(" ")[0];
     let mins = time.split(":")[1];
     let sec = time.split(":")[2];


     //change 3
     if(hrs > 12 ){
          document.querySelector(".ampm").textContent = 'PM';
     }
     else{
          document.querySelector(".ampm").textContent = 'AM';
     }

     // change 4 
     hours.textContent = hrs;
     minutes.textContent = mins;
     seconds.textContent = sec;
}

// change 5
updateClock();
setInterval(updateClock,1000);

// these are new changes 