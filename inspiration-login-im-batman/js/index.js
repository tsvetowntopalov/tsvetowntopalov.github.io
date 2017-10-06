var finger = document.getElementById("finger"),
    fingerClasses = finger.classList,
    sec = 0;
finger.onclick = function() {
  if (!fingerClasses.contains('active')) {
    fingerClasses.add("active");
    console.log((new Date()));
    var timeinterval = setInterval(function(){
      console.log(sec);
      sec++;
      if(sec >= 5) {
        clearInterval(timeinterval);
        sec = 0;
        fingerClasses.remove("active");
      }
    }, 1000);
  } else {
    // clearInterval(timeinterval);
    // fingerClasses.remove("active");
  }
  
  return false;
}