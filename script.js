const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");

const response = document.getElementById("response");

openBtn.addEventListener("click", () => {
  letter.classList.remove("hidden");
  letter.classList.add("show");

  openBtn.style.display = "none";

  letter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

yesBtn.addEventListener("click", () => {
  response.textContent =
    "Okay, that actually made me smile. Let's take it one step at a time :)";

  disableButtons();
});

thinkBtn.addEventListener("click", () => {
  response.textContent =
    "All good. Take your time — no pressure, promise.";

  disableButtons();
});

function disableButtons() {
  yesBtn.disabled = true;
  thinkBtn.disabled = true;

  yesBtn.style.opacity = "0.6";
  thinkBtn.style.opacity = "0.6";
}
