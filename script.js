var lowercase = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','~','<','>','"','[','{',']','}','|'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var LengthPrompt = 8;
var choice = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var rightprompt = getPrompt();
  var passwordText = document.querySelector("#password");
  
  if(rightprompt){
    var newpassword = generatePassword();
    
    passwordText.value = newpassword;
} else {
  passwordText.value = " ";
}
}


function generatePassword(){
  var passwordgenerate = '';
  for (var i = 0; i < LengthPrompt; i++){
    var Random = Math.floor(Math.random() * choice.length);
    passwordgenerate = passwordgenerate + choice[Random];
  }
  return passwordgenerate;
}

  
function getPrompt(){
  LengthPrompt = parseInt(prompt("Please choose a number between 8 and 128 characters to generate your password"));

  if(isNaN(LengthPrompt) || LengthPrompt < 8 || LengthPrompt > 128) {
    alert('invalid input');
    return false;
  }

  if (confirm("Would you like lowercase")){
    choice = choice.concat(lowercase);
  }
  if (confirm("Would you like uppercase")){
    choice = choice.concat(uppercase);
  }
  if (confirm("Would you like numbers")){
    choice = choice.concat(numbers);
  }
  if (confirm("Would you like special Characters")){
    choice = choice.concat(specialCharacters);
  }
  return true;


}


