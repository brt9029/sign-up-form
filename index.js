const pass = document.getElementById("password");
const cPass = document.getElementById("cpassword");
const error = document.getElementById("error");

pass.addEventListener('input', () => {
  if (pass.value == cPass.value && pass.value != '') {
    pass.style.borderColor = "green";
    cPass.style.borderColor = "green";
    error.style.display = "none";
  } else {
    pass.style.borderColor = "red";
    cPass.style.borderColor = "red";
    error.style.display = "block";
  }
});

cPass.addEventListener('input', () => {
  if (pass.value == cPass.value && pass.value != '') {
    pass.style.borderColor = "green";
    cPass.style.borderColor = "green";
    error.style.display = "none";
  } else {
    pass.style.borderColor = "red";
    cPass.style.borderColor = "red";
    error.style.display = "block";
  }
});