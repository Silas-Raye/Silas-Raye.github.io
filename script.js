var countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var megaminutes = Math.floor(minutes / 3);
    
  document.getElementById("megaminutes").innerHTML = megaminutes + " megaminutes";
    
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
