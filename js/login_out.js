"use strict";

let users = [
  {
    name: "Ibrahima",
    email: "join803@ibrahima.de",
    password: "1234",
  },
  {
    name: "Pascal",
    email: "join803@pascal.de",
    password: "1235",
  },
  {
    name: "Henrik",
    email: "join803@henrik.de",
    password: "1236",
  },
  {
    name: "Thomas",
    email: "join803@thomas.com",
    password: "1237",
  },
];

///////// SINGN UP    /////////////////////////////////////////////////

const registerUser = function (name, email, password) {
  let newUser = new Object();
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
};

const loadUsers = function () {
  let existUsers = localStorage.getItem("users");
  if (existUsers) {
    users = JSON.parse(existUsers);
  }
};

/////////////// LOG in /////////////////////////////////////////////////

const checkUserData = function () {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const email = user["email"];
    const password = user["password"];
    checkDataForValidation(email, password);
  }
};

const openHelp = function () {
  let summPage = document.getElementById("summary-page");
  let helpIcon = document.getElementById("help-icon");
  let helpPage = document.getElementById("help-page");
  helpIcon.classList.add("d-none");
  summPage.classList.add("d-none");
  helpPage.classList.remove("d-none");
  helpPage.style.display = "inline-block";
};

const showPrivacyPolicy = function () {
  let summPage = document.getElementById("summary-page");
  let loginBtn = document.getElementById("loginBtn");
  let helpIcon = document.getElementById("help-icon");
  let privacyPage = document.getElementById("privacy-page");
  let userMenu = document.getElementById("submenu-user");
  let helpPage = document.getElementById("help-page");
  hideIfPrivayPage(helpIcon, loginBtn, summPage, userMenu, helpPage);
  helpPage.style.display = "";
  privacyPage.classList.remove("d-none");
  privacyPage.style.display = "inline-block";
};

const hideIfPrivayPage = function (
  helpIcon,
  loginBtn,
  summPage,
  userMenu,
  helpPage
) {
  helpIcon.classList.add("d-none");
  loginBtn.classList.add("d-none");
  summPage.classList.add("d-none");
  userMenu.classList.add("d-none");
  helpPage.classList.add("d-none");
};

function isPasswordValid(givenPassword, currentPassword) {
  if (givenPassword == currentPassword) {
    return true;
  } else {
    return false;
  }
}

function isEmailValid(givenEmail, currentEmail) {
  if (givenEmail.toLowerCase() == currentEmail.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
const generateError = (errorType, errorMsg) => {
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  let emailField = document.getElementById("email");
  let passwordField = document.getElementById("password");
  if (errorType == "email") {
    emailField.style.border = "2px solid red";
    emailError.innerHTML = errorMsg;
  } else if (errorType == "password") {
    passwordField.style.border = "2px solid red";
    passwordError.innerHTML = errorMsg;
  }
};

const openSummaryPage = function () {
  window.location.href = "../html/summary.html";
};

const checkDataForValidation = function (currentEmail, currentPassword) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (isEmailValid(email.value, currentEmail)) {
    checkPassword(password, currentPassword);
  } else {
    generateError("email", "Please Enter a valid email");
  }
};

const checkPassword = function (password, currentPassword) {
  if (isPasswordValid(password.value, currentPassword)) {
    openSummaryPage();
  } else {
    generateError("password", "Please Enter a valid password");
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkDataForValidation();
  }
});
