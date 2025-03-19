document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll("section");
  const menu_links = document.querySelectorAll(".nav-item a");

  const makeActive = link => {
    menu_links[link].classList.add("active");
    sections[link].classList.add("sticky");
    document.title = `Aleš Urbánek | ${menu_links[link].textContent}`;
  };
  const removeActive = link => {
    menu_links[link].classList.remove("active");
    sections[link].classList.remove("sticky");
  };
  const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link));

  const sectionMargin = 10;
  let currentActive = 0;

  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1;

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);