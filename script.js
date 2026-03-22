function showSection(sectionId) {

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
section.classList.add("hidden");
});

document.getElementById(sectionId).classList.remove("hidden");

}

async function newQuote(){

const response = await fetch("https://api.quotable.io/random");

const data = await response.json();

document.getElementById("quote-text").innerText = '"' + data.content + '"';

document.getElementById("quote-author").innerText = "— " + data.author;

}

newQuote();
