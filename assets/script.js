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
  console.log(document.querySelector("#hasUpperCase").getAttribute("checked"));
  if (document.getElementById("hasUpperCase").getAttribute("checked") === "true"){
    result.hasUpperCase = true;
  }
  else{
    result.hasUpperCase = false;
  };
  if (document.querySelector("#hasLowerCase").value == "on"){
    result.hasLowerCase = true;
  }
  else{
    result.hasLowerCase = false;
  };
  if (document.querySelector("#hasSpecialCharacters").value == "on"){
    result.hasSpecialCharacters = true;
  }
  else{
    result.hasSpecialCharacters = false;
  };
  if (document.querySelector("#hasNumbers").value == "on"){
    result.hasNumbers = true;
  }
  else{
    result.hasNumbers = false;
  };
  return result;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var minLength = 8;
var maxLength = 128;

var Config = {
  length: 8,
  hasLowerCase: true,
  hasUpperCase: true,
  hasSpecialCharacters: true,
  hasNumbers: true
};

var legalCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numbers = "0123456789";

var generatePassword = function(config){
  var result = "";
  console.log(config);
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
    result += char;
  }
  return result;
}

