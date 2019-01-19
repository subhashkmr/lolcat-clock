var time=document.querySelector("#time")
function updateClock() {
    var now= new Date();
    var h=now.getHours();
    var m=now.getMinutes();
    if(h>12){ 
        var o=h-12;
     time.textContent=o+":"+m+" PM";
    }
    else{ if (h<12 && m>10) {
         time.textContent=h+":0"+ m +" PM";
    }
    else{

        time.textContent=h+":"+ m +" AM";
    }}
    if (m<10 && h>12) {
         var o=h-12;
     time.textContent=o+":0"+m+" AM";
 }
    
    setTimeout(updateClock, 1000);
}
    updateClock();
   
document.querySelector("button").addEventListener("click",mango);
function mango(){
    document.querySelector(".t").textContent="Their is party at 12:00 AM";
     setTimeout(tango,2000);
}
function tango(){
     document.querySelector(".t").textContent="";
}