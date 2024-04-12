var startDate = new Date("April 12, 2024 00:00:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
    
  var elapsedTime = now - startDate;
    
  var totalMinutes = Math.floor(elapsedTime / (1000 * 60));
  var megaminutes = Math.floor(totalMinutes / 3);
  var days = Math.floor(totalMinutes / 1440);
    
  document.getElementById("megaminutes").innerHTML = megaminutes + " megaminutes";
  document.getElementById("days").innerHTML = days + " days";
}, 1000);
