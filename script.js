function updateValue() {
  let price = document.getElementById("myRange").value;
  document.getElementById("slider-value").innerHTML = price + ".00";
  if (price == 8) {
    document.getElementById("views").innerHTML = "10K";
  }
  if (price == 12) {
    document.getElementById("views").innerHTML = "50K";
  }
  if (price == 16) {
    document.getElementById("views").innerHTML = "100K";
  }
  if (price == 20) {
    document.getElementById("views").innerHTML = "200K";
  }
  if (price == 24) {
    document.getElementById("views").innerHTML = "500K";
  }
  if (price == 30) {
    document.getElementById("views").innerHTML = "750K";
  }
  if (price == 36) {
    document.getElementById("views").innerHTML = "1M";
  }
}

document.getElementById("switch").addEventListener("click", showDiscount);

function showDiscount() {
  let toggle = document.getElementById("switch").value;
  discount = document.getElementById("discount");
  console.log(discount);
  console.log(toggle);
  if (toggle.checked) {
    discount.classList.add = "showit";
  } else {
    discount.classList.remove = "showit";
  }
}
