const chatInput = document.querySelector(".reply input");
const hashtagIcon = document.querySelector(".reply__icons i:nth-child(2)");
const sendIcon = document.querySelector(".reply__icons button");

function inputIconChange() {
  if (chatInput.name.value == "") {
    sendIcon.style.classList.add(hide);
  } else {
    hashtagIcon.style.classList.add(hide);
    sendIcon.style.classList.remove(hide);
  }
}
