function showSection(sectionId) {

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
section.classList.add("hidden");
});
    
document.addEventListener("DOMContentLoaded", () => {
    async function loadQuote() {
        const textEl = document.getElementById("quote-text");
        const authorEl = document.getElementById("quote-author");

        try {
            const response = await fetch(`https://api.quotable.io/random?${Date.now()}`);
            const data = await response.json();

            textEl.innerText = `"${data.content}"`;
            authorEl.innerText = `— ${data.author}`;
        } catch (error) {
            console.error(error);
            textEl.innerText =
                "In science the important thing is not to stop questioning.";
            authorEl.innerText =
                "— Albert Einstein";
        }
    }

    // Load first quote immediately
    loadQuote();

    // Load a new quote every 10 seconds
    setInterval(loadQuote, 10000);
});
