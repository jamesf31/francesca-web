const links = document.querySelectorAll(".project-link");
const groups = document.querySelectorAll(".preview-group");

links.forEach((link, index) => {

  link.addEventListener("mouseenter", () => {

    groups.forEach(group => {
      group.classList.remove("active");
    });

    groups[index].classList.add("active");

  });

  link.addEventListener("mouseleave", () => {

    groups[index].classList.remove("active");  
    });

});