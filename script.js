function updateValue() {
  let value = document.getElementById("myRange").value;
  document.getElementById("slider-value").innerHTML = value + ".00";
  console.log(value);
}
