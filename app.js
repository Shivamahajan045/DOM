// Write your code below:
const handleFormSubmit = (event) => {
  event.preventDefault();
  let name = event.target.username.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let myObj = {
    username: name,
    email: email,
    phone: phone,
  };
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  localStorage.setItem(myObj.email, JSON.stringify(myObj));
  li.textContent =
    li.textContent = `${myObj.username} - ${myObj.email} - ${myObj.phone}`;
  ul.appendChild(li);
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  li.appendChild(btn);
  btn.addEventListener("click", (event) => {
    let parentElement = event.target.parentElement;
    parentElement.remove();
    localStorage.removeItem(myObj.email);
  });

  let ediBtn = document.createElement("button");
  ediBtn.textContent = "Edit";
  li.appendChild(ediBtn);
  ediBtn.addEventListener("click", (event) => {
    let parentElement = event.target.parentElement;
    let storedData = JSON.parse(localStorage.getItem(myObj.email));
    if (storedData) {
      document.getElementById("username").value = storedData.username;
      document.getElementById("email").value = storedData.email;
      document.getElementById("phone").value = storedData.phone;
    }
    parentElement.remove();
    localStorage.removeItem(myObj.email);
  });
};

module.exports = handleFormSubmit;
