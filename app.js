let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("Username", `${event.target.username.value}`);
  localStorage.setItem("Email", `${event.target.email.value}`);
  localStorage.setItem("Phone", `${event.target.phone.value}`);
  console.log(localStorage.getItem("Username"));
  console.log(localStorage.getItem("Email"));
  console.log(localStorage.getItem("Phone"));
});
