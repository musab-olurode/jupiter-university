const firstForm = document.querySelector(".step-1");
const secondForm = document.querySelector(".step-2");
const nextBtn = document.querySelector(".form-container .btn.next");
const backBtn = document.querySelector(".form-container .btn.back");

const switchForms = (fromElem, toElem) => {
  fromElem.classList.add("hide-anim");
  setTimeout(() => {
    fromElem.classList.add("hide");
    toElem.classList.remove("hide-anim");
    toElem.classList.remove("hide");
  }, 600);
};

nextBtn.addEventListener("click", () => {
  switchForms(firstForm, secondForm);
});

backBtn.addEventListener("click", () => {
  switchForms(secondForm, firstForm);
});
