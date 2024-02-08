var countDownDate = new Date("Feb 22, 2024 18:30:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var totalMinutes = Math.floor(distance / (1000 * 60));
  var megaminutes = Math.floor(totalMinutes / 3);
    
  document.getElementById("megaminutes").innerHTML = megaminutes + " megaminutes till I see you 🐞";
    
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);