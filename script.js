function showSection(sectionId) {

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
section.classList.add("hidden");
});

document.getElementById(sectionId).classList.remove("hidden");

}
