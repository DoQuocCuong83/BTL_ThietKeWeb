const loadHTML = (targetSelector, filePath) => {
  fetch(filePath)
    .then((res) => res.text())
    .then((html) => (document.querySelector(targetSelector).innerHTML = html));
};

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header-container", "layout/header.html");
  loadHTML("#footer-container", "layout/footer.html");
});
