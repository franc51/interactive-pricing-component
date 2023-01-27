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
  if (document.getElementById("switch").checked) {
    let initialPrice = document.getElementById("slider-value").innerHTML;
    console.log(initialPrice);
    document.getElementById("slider-value").innerHTML =
      (initialPrice * 75) / 100 + ".00";
  } else if (document.getElementById("switch").unchecked) {
    let discountedpr = document.getElementById("slider-value").innerHTML;
    console.log(discountedpr);
    document.getElementById("slider-value").innerHTML =
      (discountedpr * 75) / 100 + ".00";
  }
}
