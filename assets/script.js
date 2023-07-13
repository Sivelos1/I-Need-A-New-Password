// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var config = checkConfig();
  var password = generatePassword(config);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function checkConfig(){
  var result = {
    length: null,
    hasUpperCase: true,
    hasLowerCase: true,
    hasSpecialCharacters: true,
    hasNumbers: true
  };
  result.length = document.querySelector("#pwLength").value * 1;
  result.hasUpperCase = document.getElementById("hasUpperCase").checked;
  result.hasSpecialCharacters = document.getElementById("hasSpecialCharacters").checked;
  result.hasNumbers = document.getElementById("hasNumbers").checked;
  return result;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var minLength = 8;
var maxLength = 128;

var Config = {
  length: 8,
  hasUpperCase: true,
  hasSpecialCharacters: true,
  hasNumbers: true
};

var legalCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numbers = "0123456789";

var generatePassword = function(config){
  var result = "";
  for (let index = 0; index < config.length; index++) {
    var random = Math.random();
    var array = legalCharacters;
    if(Math.round(random * 2) == 1 && config.hasSpecialCharacters === true){
      array = specialCharacters;
    }
    else if(Math.round(random * 2) == 2 && config.hasNumbers === true){
      array = numbers;
    }
    var char = array.charAt(Math.random() * array.length);
    if(Math.random() > 0.5 && config.hasUpperCase === true){
      char = char.toLocaleUpperCase();
    }
    result += char;
  }
  return result;
}

