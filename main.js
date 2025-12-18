document.getElementById("img").src = "img/billed1";
document.getElementById("change").addEventListener("click", change);

function change() {
  let billed = document.getElementById("image");
  billed.src = "img/billed2";
}
