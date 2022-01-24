/** @format */

// const moment = require("moment");

let display = document.querySelector("h1");

// using setInterval function

// let counter = (num) => {
//   let interval = setInterval(() => {
//     if (num === 0) {
//       console.log("Happy Republic Day");
//       display.innerText = "Happy Republic Day";
//       clearInterval(interval);
//       confetti.start();
//       setInterval(() => confetti.stop(), 5000);
//       return;
//     }
//     console.log(num);
//     display.innerText = num;
//     num -= 1;
//   }, 1000);
// };

// counter(10);

setTimeout(() => {
  display.innerText = 10;
  setTimeout(() => {
    display.innerText = 9;
    setTimeout(() => {
      display.innerText = 8;
      setTimeout(() => {
        display.innerText = 7;
        setTimeout(() => {
          display.innerText = 6;
          setTimeout(() => {
            display.innerText = 5;
            setTimeout(() => {
              display.innerText = 4;
              setTimeout(() => {
                display.innerText = 3;
                setTimeout(() => {
                  display.innerText = 2;
                  setTimeout(() => {
                    display.innerText = 1;
                    setTimeout(() => {
                      confetti.start();
                      setInterval(() => confetti.stop(), 2000);
                      display.innerText = "Happy Republic Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
