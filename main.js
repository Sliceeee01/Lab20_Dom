console.log(document);
const  title = document.getElementById("title");
const text = document.querySelector(".text")

console.log(title);
console.log(text);

title.textContent = "Dom изменен через JS!";

title.style.color = "blue";
title.style.backgroundcolor = "#f0f0f0";
title.style.color = "darkgreen";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darlgreen"