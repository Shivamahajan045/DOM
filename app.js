let mainHeading = document.querySelector("#main-heading");
let subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
mainHeading.appendChild(subHeading);
subHeading.style.fontStyle = "italic";

let para = document.createElement("p");
para.textContent = "Total fruits: 4";
para.setAttribute("id", "fruits-total");

let ul = document.querySelector(".fruits");
ul.prepend(para);
