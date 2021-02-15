const refs = {
  iconOpenRef: document.querySelector(".open"),
  iconCloseRef: document.querySelector(".close"),
  mobileMenuRef: document.querySelector(".navigation__list"),
};

const { iconOpenRef, iconCloseRef, mobileMenuRef } = refs;

function onMobileMenuOpen() {
  iconOpenRef.style.display = "none";
  mobileMenuRef.classList.add("active");
  iconCloseRef.style.display = "block";
}

function onMobileMenuClose() {
  iconOpenRef.style.display = "block";
  iconCloseRef.style.display = "none";
  mobileMenuRef.classList.remove("active");
}

iconOpenRef.addEventListener("click", onMobileMenuOpen);

iconCloseRef.addEventListener("click", onMobileMenuClose);

mobileMenuRef.addEventListener("click", (event) => {
  if (event.target === mobileMenuRef) {
    onMobileMenuClose();
  }
  if (event.target.tagName === "A") {
    onMobileMenuClose();
  }
});
