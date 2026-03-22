function showSection(sectionId) {

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
section.style.display = "none";
});

document.getElementById(sectionId).style.display = "block";

}
