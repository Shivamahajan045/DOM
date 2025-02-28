let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "bg-light"
  );

  let input = document.getElementById("exp-amount");
  let desc = document.getElementById("desc");
  let category = document.getElementById("category");
  let ul = document.querySelector("ul");

  let expense = {
    amount: input.value,
    description: desc.value,
    category: category.value,
    id: Date.now(),
  };
  li.dataset.id = expense.id;

  localStorage.setItem(`expense.${expense.id}`, JSON.stringify(expense));

  let deleteExpense = document.createElement("button");
  deleteExpense.textContent = "Delete Expense";
  deleteExpense.classList.add("btn", "btn-danger", "btn-sm", "me-2");

  let editExpense = document.createElement("button");
  editExpense.textContent = "Edit Expense";
  editExpense.classList.add("btn", "btn-warning", "btn-sm");

  li.innerHTML = `${input.value} ---- > ${desc.value} ----> ${category.value}`;
  li.appendChild(deleteExpense);
  li.appendChild(editExpense);

  deleteExpense.addEventListener("click", () => {
    let id = li.dataset.id;
    let parentElement = deleteExpense.parentElement;
    parentElement.remove();
    localStorage.removeItem(`expense.${id}`);
  });

  editExpense.addEventListener("click", () => {
    let id = li.dataset.id;
    let expense = JSON.parse(localStorage.getItem(`expense.${id}`));
    input.value = expense.amount;
    desc.value = expense.description;
    category.value = expense.category;
  });

  ul.appendChild(li);
  input.value = "";
  desc.value = "";
  category.value = "";
});
