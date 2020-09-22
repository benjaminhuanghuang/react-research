import React from "./react";

let element = React.createElement("div", { name: "xxx" }, 'hello', React.createElement("span", {}, "123"));

console.log(element);

React.render("Hello", document.getElementById("root"));
    