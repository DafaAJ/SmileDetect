const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const nameField = document.getElementById("nameField");
const submitBtn = document.querySelector(".submit");
const toggle = document.querySelector(".toggle");

loginTab.addEventListener("click", () => setMode("login"));
registerTab.addEventListener("click", () => setMode("register"));

function setMode(mode) {
  if (mode === "register") {
    nameField.classList.remove("hidden");
    submitBtn.textContent = "Daftar";
    toggle.classList.add("register");
  } else {
    nameField.classList.add("hidden");
    submitBtn.textContent = "Masuk";
    toggle.classList.remove("register");
  }
}