// Assignment Code
var generateBtn = document.querySelector("#generate");
var Lower = 'abcdefghijklmnopqrstuvwxyz0123456789';
var Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var num = '0123456789';
var Special = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';
var passwordLength;
var uppercase;
var lowercase;
var specialchar;




function PasswordLength() {
  PasswordLength = prompt('Please tell us how long you wish your password to be. Must be greater than 8 and less than 128');
  return parseInt(PasswordLengthString, 10);
}

function generatePassword() {
  var password = "";
  // add code to change passqword variable.

  // window.prompt
  // window.confirm

  return password; // return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
