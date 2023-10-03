const servicesButton = document.querySelector(".services__button");
const servicesContainer = document.querySelector(".services__blocks");

function serviceToggle() {
  servicesContainer.classList.toggle("services__blocks_type_opened");
}

servicesButton.addEventListener("click", serviceToggle);



const aboutCompanyButton = document.querySelector(".aboutCompany__button");
const aboutCompanyContainer = document.querySelector(".aboutCompany__text-conatiner");

function aboutCompanyToggle() {
  aboutCompanyContainer.classList.toggle("aboutCompany__text-conatiner_type_opened");
}

aboutCompanyButton.addEventListener("click", aboutCompanyToggle);