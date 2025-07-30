document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("burger-button");
  const nav = document.getElementById("navigation");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("in")) {
        $(nav).collapse("hide");  // referme avec animation Bootstrap
      } else {
        $(nav).collapse("show");  // ouvre avec animation Bootstrap
      }
    });

    // Ferme le menu si on clique sur un lien
    const links = nav.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        $(nav).collapse("hide");
      });
    });
  }
});
