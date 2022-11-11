const fulImgBox = document.getElementById("fulImgBox"),
  fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference.firstElementChild.src;
}

function closeImg() {
  fulImgBox.style.display = "none";
}

document.body.addEventListener("keydown", function (event) {
  console.log(event.code, event.keyCode);
  if (event.code === "Escape" || event.keyCode === 27) {
    // Aqui la lógica para el caso de Escape ...
    fulImgBox.style.display = "none";
  }
});
