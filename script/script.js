const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const nameField = document.getElementById("nameField");
const submitBtn = document.querySelector(".submit");

loginTab.addEventListener("click", () => setMode("login"));
registerTab.addEventListener("click", () => setMode("register"));

function setMode(mode) {
  if (mode === "register") {
    nameField.classList.remove("hidden");
    submitBtn.textContent = "Daftar";
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
  } else {
    nameField.classList.add("hidden");
    submitBtn.textContent = "Masuk";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  }
}