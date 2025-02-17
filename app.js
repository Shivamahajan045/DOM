document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let fruitInput = document.getElementById("fruit-to-add");

  // Create description input and insert before "Add" button
  let descriptionInput = document.createElement("input");
  descriptionInput.id = "description";
  descriptionInput.name = "description";
  descriptionInput.type = "text";
  descriptionInput.placeholder = "Enter description";
  form.insertBefore(descriptionInput, form.querySelector("#add"));

  let fruitList = document.querySelector(".fruits");

  // ✅ Fix: Add empty descriptions to pre-existing fruits
  let existingFruits = document.querySelectorAll(".fruits .fruit");
  existingFruits.forEach((li) => {
    if (!li.querySelector(".description")) {
      let descPara = document.createElement("p");
      descPara.classList.add("description");
      descPara.style.fontStyle = "italic";
      descPara.textContent = ""; // Empty initially
      li.appendChild(descPara);
    }
  });

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    let fruitName = fruitInput.value.trim();
    let description = descriptionInput.value.trim();

    if (fruitName === "" || description === "") {
      return; // Do nothing if inputs are empty
    }

    // Create new fruit item
    let li = document.createElement("li");
    li.classList.add("fruit");

    // Create span for fruit name
    let fruitSpan = document.createElement("span");
    fruitSpan.classList.add("fruit-name");
    fruitSpan.textContent = fruitName;
    li.appendChild(fruitSpan);

    // Create description paragraph in italics
    let descPara = document.createElement("p");
    descPara.classList.add("description");
    descPara.style.fontStyle = "italic"; // Ensuring italics
    descPara.textContent = description;
    li.appendChild(descPara);

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);

    // Append the new fruit item to the list
    fruitList.appendChild(li);

    // Clear input fields
    fruitInput.value = "";
    descriptionInput.value = "";
  });

  // Add event listener to delete fruit
  fruitList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });

  // Create a filter that shows only those fruits whose name or description matches the entered text
  let filter = document.getElementById("filter");

  filter.addEventListener("keyup", (e) => {
    e.preventDefault();
    const textEntered = e.target.value.toLowerCase().trim();
    const fruitItems = document.querySelectorAll(".fruit");

    let matchedCount = 0;

    fruitItems.forEach((fruitItem) => {
      let fruitNameElem =
        fruitItem.querySelector(".fruit-name") || fruitItem.firstChild;
      let fruitNameText = fruitNameElem
        ? fruitNameElem.textContent.toLowerCase()
        : "";

      let descElem = fruitItem.querySelector(".description");
      let descText = descElem ? descElem.textContent.toLowerCase() : "";

      // Show if textEntered matches either the fruit name OR description
      if (
        fruitNameText.includes(textEntered) ||
        descText.includes(textEntered)
      ) {
        fruitItem.style.display = "flex"; // Use flex since items are in a list
        matchedCount++;
      } else {
        fruitItem.style.display = "none";
      }
    });
  });
});
