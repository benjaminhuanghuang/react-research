import React from "./react";

function say(){
  console.log("say");
}

let element = React.createElement("div", { name: "xxx" }, 'hello', React.createElement("span", {}, "123"));

let element2 = React.createElement("div", { name: "xxx" }, 'hello', React.createElement("button", {onClick:say}, "123"));

console.log(element);

//React.render("Hello", document.getElementById("root"));
React.render(element2, document.getElementById("root"));

    