function checkPasswordStrength() {
  var password = document.getElementById("password").value;
  var strength = 0;
  if (password.length >= 8) {
      strength += 1;
  }
  var strengthIndicator = document.getElementById("password-strength");
  if (strength == 0) {
      strengthIndicator.innerHTML = "Poor";
  } else if (strength >= 1) {
      strengthIndicator.innerHTML = "Strong";
  }
}