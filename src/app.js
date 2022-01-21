/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#b").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("My dog eat my homework");
};

let generateExcuse = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return who[whoindex] + " " + what[whatindex] + " " + when[whenindex];
};
