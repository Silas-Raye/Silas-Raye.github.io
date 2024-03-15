var s_startTime = new Date("Feb 20, 2024 00:00:00").getTime();
var g_startTime = new Date("March 07, 2024 03:00:00").getTime();
var w_startTime = new Date("March 15, 2024 07:00:00").getTime();

var countUpFunction = setInterval(function() {

  var now = new Date().getTime();
    
  var s_elapsedTime = now - s_startTime;
  var w_elapsedTime = now - w_startTime;
  var g_elapsedTime = now - g_startTime;
  
  var s_days = Math.floor(s_elapsedTime / (1000 * 60 * 60 * 24));
  var s_hours = Math.floor((s_elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var s_minutes = Math.floor((s_elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  var w_days = Math.floor(w_elapsedTime / (1000 * 60 * 60 * 24));
  var w_hours = Math.floor((w_elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var w_minutes = Math.floor((w_elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  var g_days = Math.floor(g_elapsedTime / (1000 * 60 * 60 * 24));
  var g_hours = Math.floor((g_elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var g_minutes = Math.floor((g_elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countup_s").innerHTML = "▶️: " + s_days + "d " + s_hours + "h " + s_minutes + "m ";
  document.getElementById("countup_g").innerHTML = "💰: " + g_days + "d " + g_hours + "h " + g_minutes + "m ";
  document.getElementById("countup_w").innerHTML = "🍃: " + w_days + "d " + w_hours + "h " + w_minutes + "m ";
    
}, 1000);
