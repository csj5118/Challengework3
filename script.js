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
  if (PasswordLength<8){
    alert("Password let password length be greater than 8 Characters");
  } else if (PasswordLength>128){
    alert("Let password length be shorter than 128 Characters");
  }
  PasswordLength();
}

var validate = (PasswordLength) => {
  if (PasswordLength){
    alert("Password length must be a number");
    return false;
  } else {
    if (PasswordLength >= 8 && PasswordLength <= 128){
      return true;
    }
  }
};

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
