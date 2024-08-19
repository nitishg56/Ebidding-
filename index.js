function signup() {
  document
    .getElementById("signup")
    .addEventListener(onclick, (window.location.href = "/signupform.html"));
}
function login() {
  document
    .getElementById("userlogin")
    .addEventListener(onclick, (window.location.href = "/loginform.html"));
}
function togglePasswordVisibility(fieldId) {
  var field = document.getElementById(fieldId);
  var eyeIcon = document.getElementById('eye-icon-' + fieldId);

  if (field.type === 'password') {
    field.type = 'text';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    field.type = 'password';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
}

function placeBid(){
  var checker = document.getElementById('amountBid');
  var bidValue = parseInt(checker.value);
  var currBid = document.getElementById("currentBid");
  var currValue= parseInt(currBid.textContent);
  if(bidValue<currValue){
    
    alert("Your Bid Is Lower Than Current Bid");
  } else if(bidValue>currValue){
    
    alert("Your Bid Has been Sucessfully Placed");
  } else{
    alert("Please Enter Correct Value To Place Bid");
  }
}
document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  var currentPassword = document.getElementById("currentPassword").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Perform password validation and change password logic here
  if (currentPassword === "") {
    alert("Please enter your current password.");
    return;
  }

  if (newPassword === "") {
    alert("Please enter a new password.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("New password and confirm password do not match.");
    return;
  }
  alert("Password changed successfully!");
});






