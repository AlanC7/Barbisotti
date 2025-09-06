document.querySelectorAll("img").forEach(img => {
  img.addEventListener("load", () => {
    img.classList.toggle("loaded");
  });
});