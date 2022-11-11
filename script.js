const fulImgBox = document.getElementById("fulImgBox"),
  fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference.firstElementChild.src;
}

function closeImg() {
  fulImgBox.style.display = "none";
}
