// count down
// Set the date you're counting down to
var countdownDate = new Date("2024-05-8 00:00:00").getTime();


// Update the countdown every second
var countdown = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the display
  document.querySelector(
    ".countdown-content:nth-child(1) .display-number"
  ).innerHTML = days;
  document.querySelector(
    ".countdown-content:nth-child(2) .display-number"
  ).innerHTML = hours;
  document.querySelector(
    ".countdown-content:nth-child(3) .display-number"
  ).innerHTML = minutes;
  document.querySelector(
    ".countdown-content:nth-child(4) .display-number"
  ).innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-desc").innerHTML = "🎉 EVENT BEGINS 🎉";
    document.querySelector(
      ".countdown-content:nth-child(1) .display-number"
    ).innerHTML = "0";
    document.querySelector(
      ".countdown-content:nth-child(2) .display-number"
    ).innerHTML = "0";
    document.querySelector(
      ".countdown-content:nth-child(3) .display-number"
    ).innerHTML = "0";
    document.querySelector(
      ".countdown-content:nth-child(4) .display-number"
    ).innerHTML = "0";
  }
}, 1000); // Update every second
