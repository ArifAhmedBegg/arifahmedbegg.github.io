// Function to show a section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

// List of quotes to show if API fails
const fallbackQuotes = [
  { text: "In science, the important thing is not to stop questioning.", author: "Albert Einstein" },
  { text: "The weak can never forgive. Forgiveness is the attribute of the strong", author: "Mahatma Gandhi" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "What we think, we become.", author: "Buddha" }
];

async function loadQuote() {
  const textEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");

  try {
    // Attempt to fetch from API
    const response = await fetch(`https://api.quotable.io/random?cb=${Math.random()}`);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    textEl.innerText = `"${data.content}"`;
    authorEl.innerText = `— ${data.author}`;
  } catch (error) {
    console.error("Failed to load quote from API:", error);

    // Pick a random fallback quote
    const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    textEl.innerText = `"${fallback.text}"`;
    authorEl.innerText = `— ${fallback.author}`;
  }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", loadQuote);
