//        *** bracket ***
var tokens = [
  ["{", "}"],
  ["[", "]"],
  ["(", ")"]
];

function bracketValidation(str) {
  var expression = str.split("");
  var stack = [];
  for (var i = 0; i < expression.length; i++) {
    if (isParanthesis(expression[i])) {
      if (isOpenParanthesis(expression[i])) {
        stack.push(expression[i]);
      } else {
        if (stack.length === 0) {
          return print(false);
        }
        var top = stack.pop();
        if (!matches(top, expression[i])) {
          return print(false);
        }
      }
    }
  }

  return print(stack.length === 0);
}

function isParanthesis(char) {
  var charSet = "{}[]()"
  if (charSet.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

function isOpenParanthesis(bracket) {
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === bracket) {
      return true;
    }
  }
  return false;
}

function matches(top, closed) {
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === top && tokens[i][1] === closed) {
      return true;
    }
  }
  return false;
}

function print(answer) {
  if (answer) {
    console.log("Your brackets looks good!")
  } else {
    console.log("Check your brackets!")
  }
}

bracketValidation("(Check [my] {brackets})");