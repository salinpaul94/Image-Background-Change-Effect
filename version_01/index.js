let countDownDate = new Date("Nov 4, 2023 21:59:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById("days").innerHTML = days > 9 ? days : `0${days}`;
  document.getElementById("hours").innerHTML = hours > 9 ? hours : `0${hours}`;
  document.getElementById("minutes").innerHTML = minutes > 9 ? minutes : `0${minutes}`;
  document.getElementById("seconds").innerHTML = seconds > 9 ? seconds : `0${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);