function stop() {
  let b1 = document.getElementById("stopButton");
  b1.style.backgroundColor = "#cf1124";
  let bu1 = document.getElementById("stopLight");
  bu1.style.backgroundColor = "#cf1124";
  let b2 = document.getElementById("readyButton");
  b2.style.backgroundColor = "#1f1d41";
  let bu2 = document.getElementById("readyLight");
  bu2.style.backgroundColor = "#4b5069";
  let b3 = document.getElementById("goButton");
  b3.style.backgroundColor = "#1f1d41";
  let bu3 = document.getElementById("goLight");
  bu3.style.backgroundColor = "#4b5069";
}

function ready() {
  let b2 = document.getElementById("readyButton");
  b2.style.backgroundColor = "#f7c948";
  let bu2 = document.getElementById("readyLight");
  bu2.style.backgroundColor = "#f7c948";
  let b1 = document.getElementById("stopButton");
  b1.style.backgroundColor = "#1f1d41";
  let bu1 = document.getElementById("stopLight");
  bu1.style.backgroundColor = "#4b5069";
  let b3 = document.getElementById("goButton");
  b3.style.backgroundColor = "#1f1d41";
  let bu3 = document.getElementById("goLight");
  bu3.style.backgroundColor = "#4b5069";
}

function go() {
  let b3 = document.getElementById("goButton");
  b3.style.backgroundColor = "#199473";
  let bu3 = document.getElementById("goLight");
  bu3.style.backgroundColor = "#199473";
  let b2 = document.getElementById("readyButton");
  b2.style.backgroundColor = "#1f1d41";
  let bu2 = document.getElementById("readyLight");
  bu2.style.backgroundColor = "#4b5069";
  let b1 = document.getElementById("stopButton");
  b1.style.backgroundColor = "#1f1d41";
  let bu1 = document.getElementById("stopLight");
  bu1.style.backgroundColor = "#4b5069";
}
