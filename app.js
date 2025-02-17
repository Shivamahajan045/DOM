function handleFormSubmit(event) {
  event.preventDefault();
  let name = event.target.username.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let myObj = {
    username: name,
    email: email,
    phone: phone,
  };
  localStorage.setItem("User Details", JSON.stringify(myObj));
}

module.exports = handleFormSubmit;
