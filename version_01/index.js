let countDownDate = new Date("Dec 1, 2023 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
}, 1000);