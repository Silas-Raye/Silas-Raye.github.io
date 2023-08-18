var countDownDate = new Date("Aug 19, 2023 13:00:00").getTime();

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
