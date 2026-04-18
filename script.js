// Function to show a section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

// Array of quotes
const quotes = [
  { text: "In science, the important thing is not to stop questioning.", author: "Albert Einstein" },
  { text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "What we think, we become.", author: "Buddha" }
];

// Function to show a random quote
function loadQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").innerText = `"${quote.text}"`;
  document.getElementById("quote-author").innerText = `— ${quote.author}`;
}

// Run quote on page load
document.addEventListener("DOMContentLoaded", loadQuote);

document.addEventListener("DOMContentLoaded", () => {
  loadQuote();
  setInterval(loadQuote, 10000); // change quote every 10 seconds
});

function openImage(img){

document.getElementById("imageViewer").style.display="flex";
document.getElementById("viewerImg").src=img.src;

}

function closeImage(){

document.getElementById("imageViewer").style.display="none";

}

function updateTime(){

const now = new Date();

const timeString = now.toLocaleTimeString();   // shows local time

document.getElementById("time-display").innerText = timeString;

}

// update every second
setInterval(updateTime, 1000);

// run once immediately
updateTime();
