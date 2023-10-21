let password = document.getElementById("password");
let password2 = document.getElementById("confirm-password");
let button = document.getElementById("button");

console.log("hi");

function fun1() {
  console.log(password.value, password2.value);
  if (password.value !== password2.value) {
    console.log("Not the same");
    password.classList.add("error");
    password2.classList.add("error");
  } else {
    password.classList.remove("error");
    password2.classList.remove("error");
  }
}

button.addEventListener("click", fun1);
