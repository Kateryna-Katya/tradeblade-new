const spotBtn = document.getElementById("spotBtn");
const futuresBtn = document.getElementById("futuresBtn");
const cardsContainer = document.getElementById("cardsContainer");

const standardCard = document.querySelector(".card.standard");
const vipCard = document.querySelector(".card.vip");

spotBtn.addEventListener("click", () => {
  spotBtn.classList.add("active");
  futuresBtn.classList.remove("active");

  
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(standardCard);
  cardsContainer.appendChild(vipCard);
});

futuresBtn.addEventListener("click", () => {
  futuresBtn.classList.add("active");
  spotBtn.classList.remove("active");

 
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(vipCard);
  cardsContainer.appendChild(standardCard);
});


const selected = document.getElementById("selected");
const optionsContainer = document.getElementById("options");
const selectedText = document.getElementById("selectedText");
const arrow = document.getElementById("arrow");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  arrow.classList.toggle("rotate");
});

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", () => {
    selectedText.textContent = option.textContent;
    optionsContainer.classList.remove("active");
    arrow.classList.remove("rotate");
  });
});

document.addEventListener("click", (e) => {
  if (!selected.contains(e.target)) {
    optionsContainer.classList.remove("active");
    arrow.classList.remove("rotate");
  }
});