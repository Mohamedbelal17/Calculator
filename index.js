function getValue(value) {
  let el = document.getElementById("result");
  el.value += value;
}

function getResult() {
  let el = document.getElementById("result");
  let str = el.value;
  try {
    if (/[\+\-\*\/]$/.test(str)) {
      throw new Error("Incomplete Calculation");
    }
    let result = eval(str);
    el.value = result;
  } catch (error) {
    el.value = "Error";
  }
}

function Rest() {
  document.getElementById("result").value = "";
}
function Delete() {
  let el = document.getElementById("result").value;
  document.getElementById("result").value = el.slice(0, -1);
}
