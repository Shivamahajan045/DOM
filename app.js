// Add the Edit Button:
let fruit = document.querySelectorAll(".fruit");
for (let i = 0; i < fruit.length; i++) {
  let editBtn = document.createElement("button");
  let editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";
  fruit[i].appendChild(editBtn);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'

let form = document.querySelector("form");
let fruits = document.querySelector(".fruits");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newLi = document.createElement("li");
  let fruitToAdd = document.querySelector("#fruit-to-add");
  let newText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newText);
  newLi.className = "fruit";
  const delBtn = document.createElement("button");
  const delBtnText = document.createTextNode("X");
  delBtn.appendChild(delBtnText);
  delBtn.className = "delete-btn";
  newLi.appendChild(delBtn);
  fruits.appendChild(newLi);

  let editBtn = document.createElement("button");
  let editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";

  let fruit = document.querySelectorAll(".fruit");
  for (let i = 0; i < fruit.length; i++) {
    fruit[i].appendChild(editBtn);
  }

  // let fruitToAdd = document.querySelector("#fruit-to-add");
  // let newLi = document.createElement('li');
  // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="delete-btn">Edit</button>';
  // fruits.appendChild(newLi);

  fruits.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      let fruitToDelete = e.target.parentElement;
      fruits.removeChild(fruitToDelete);
    }
  });
});
