var themeToggle = document.getElementById("themeToggle");
var sun = document.getElementById("sun")
var moon = document.getElementById("moon")
window.addEventListener("load", function () {
  if (themeToggle) {
    setTheme();
    document.body.style.visibility = 'visible';
    themeToggle.addEventListener("change", function () {
      updateTheme();
    });
  }
});

function setTheme() {
  var themeToggleOn =
    (localStorage.getItem("themeToggle") !== null
      && localStorage.getItem("themeToggle") === "dark")
    || (localStorage.getItem("themeToggle") === null
      && window.matchMedia("(prefers-color-scheme: dark)").matches);
  themeToggle.checked = themeToggleOn;
  themeToggleOn
    ? document.documentElement.setAttribute("data-bs-theme", "dark")
    : document.documentElement.setAttribute("data-bs-theme", "light");
  updateIcon();
}

function updateTheme() {
  const theme = themeToggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("themeToggle", theme);
  updateIcon();

}

function updateIcon() {
  const isDarkTheme = themeToggle.checked;
  sun.style.display = isDarkTheme ? "none" : "block";
  moon.style.display = isDarkTheme ? "block" : "none";
}