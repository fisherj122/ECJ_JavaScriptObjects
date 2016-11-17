//main function
function main() {
  var person = createNameAndPassword();
  console.log("Initial Check...\n");
  person.checkNamePass();
  console.log("Other checks:");
  person.name = "eric";
  console.log("Name too short... " + person.checkNamePass());
  person.password = "chris"
  console.log("Password also too short... " +person.checkNamePass());
  person.name = "chris";
  console.log("Name and password the same... " +person.checkNamePass());
  person.name = "learnacademy!#$";
  person.password = "!aaaaaaaaaa";
  console.log("Name has forbidden characters... " + person.checkNamePass());
  person.name = "learnacademy";
  person.password = "academylearn";
  console.log("Password doesn't have necessary characters... " + person.checkNamePass());
}
//------------------------------------------------------------------------------
//check username function
function createNameAndPassword() {
  var uname = prompt('Please Enter a Username!\nMust be at least six (6) characters long\nCannot contain the characters "!#$"\nCannot be the same as your password');

  var upass = prompt('Please Enter a Password\nMust be at least six (6) characters long\nMUST contain at least one of the characters: "!#$"\nCannot be the same as your Username');

  return {
    name: uname,
    password: upass,
    error: ["valid","User ID/Password must have at least six characters","User ID and password cannot be the same","User ID cannot contain !","User ID cannot contain #","User ID cannot contain $","Password must contain at least one of the following: !, #, or $"],
    errArr: [],
    checkNamePass: function() {
      this.errArr = [];
      this.errArr = checkNumbers(this.name,this.password);
      if (this.errArr.length === 0) {
        alert("{ valid: true }");
        return { valid: true };
      }
      else {
        var s = "";
        for (var i = 0; i < this.errArr.length; i++) {
          s += this.error[this.errArr[i]];
          if (i != this.errArr.length-1) {
            s += ";\n";
          }
        }
        alert("{ valid: false, reason: " + s + " }");
        return { valid: false, reason: s };
      }
    }
  }
}
//------------------------------------------------------------------------------
//Indivudal Username/Password requirement checks
function geThanSix(word) { //Checks Username/Password are at least 6 characers
  if (word.length >= 6) {
    return 0;
  }
  else {
    return 1;
  }
}

function wordsNotEqual(word1,word2) { //Checks that Username and Password are not the same
  if (word1 != word2) {
    return 0;
  }
  else {
    return 2;
  }
}

function specialName(word) { //Checks Username for special characters (not allowed)
  var errArr = [];
  if (word.includes("!")) {
    errArr.push(3);
  }
  if (word.includes("#")) {
    errArr.push(4);
  }
  if (word.includes("$")) {
    errArr.push(5);
  }
  return errArr;
}

function specialPass(word) { ////Checks Passwrod for special characters (must have at least one)
  if (word.includes("!") || word.includes("#") || word.includes("$")) {
    return 0;
  }
  else {
    return 6;
  }
}
//------------------------------------------------------------------------------
//Check for any Error Codes, Returns num == Error Codes
function checkNumbers(n,p) {
  var errArr = [];
  var num = geThanSix(n);
  if (num != 0) {
    errArr.push(num);
  }
  num = wordsNotEqual(n,p);
  if (num != 0) {
    errArr.push(num);
  }
  errArr = errArr.concat(specialName(n));
  num = specialPass(p);
  if (num != 0) {
    errArr.push(num);
  }
  return errArr;
}
//------------------------------------------------------------------------------
