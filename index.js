var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

function myResult() {
  option_from = inputType.value;
  option_to = resultType.value;

  if (option_from === "Binary" && option_to === "Decimal") {
    result.value = parseInt(input.value, 2);
  } else if (option_from === "Decimal" && option_to === "Binary") {
    result.value = Number(input.value).toString(2);
  } else if (option_from === "Binary" && option_to === "Octal") {
    result.value = parseInt(input.value, 2).toString(8);
  }

  if (option_from === "Binary" && option_to === "Hexadecimal") {
    result.value = parseInt(input.value, 2).toString(16);
  } else if (option_from === "Octal" && option_to === "Binary") {
    result.value = parseInt(input.value, 8).toString(2);
  } else if (option_from === "Octal" && option_to === "Decimal") {
    result.value = parseInt(input.value, 8).toString(10);
  }

  if (option_from === "Octal" && option_to === "Hexadecimal") {
    result.value = parseInt(input.value, 8).toString(16);
  } else if (option_from === "Decimal" && option_to === "Octal") {
    result.value = parseInt(input.value, 10).toString(8);
  } else if (option_from === "Decimal" && option_to === "Hexadecimal") {
    result.value = parseInt(input.value, 10).toString(16);
  } else if (option_from === "Hexadecimal" && option_to === "Binary") {
    result.value = parseInt(input.value, 16).toString(2);
  } else if (option_from === "Hexadecimal" && option_to === "Octal") {
    result.value = parseInt(input.value, 16).toString(8);
  } else if (option_from === "Hexadecimal" && option_to === "Decimal") {
    result.value = parseInt(input.value, 16).toString(10);
  } else if (option_from === "Hexadecimal" && option_to === "Hexadecimal") {
    result.value = input.value;
  } else if (option_from === "Binary" && option_to === "Binary") {
    result.value = input.value;
  } else if (option_from === "Octal" && option_to === "Octal") {
    result.value = input.value;
  } else if (option_from === "Decimal" && option_to === "Decimal") {
    result.value = input.value;
  }
}
