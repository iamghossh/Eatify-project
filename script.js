const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");
const headernav = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  btnNav.classList.toggle("nav-open");
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  Document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSuported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
