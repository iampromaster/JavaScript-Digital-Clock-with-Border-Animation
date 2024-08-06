let hourText = document.querySelector(".hour");
let minText = document.querySelector(".min");
let secText = document.querySelector(".sec");
let ampmText = document.querySelector(".ampm");

setInterval(() => {
  let date = new Date();

  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let label;
  label = hours < 12 ? "AM" : "PM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  
  
  hours = hours < 10 ? "0" + hours : hours;
  
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  hourText.innerText = hours;
  minText.innerText = mins;
  secText.innerText = secs;

  ampmText.innerText = label;
}, 1000);
