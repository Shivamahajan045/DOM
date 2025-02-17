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
};

module.exports = handleFormSubmit;
