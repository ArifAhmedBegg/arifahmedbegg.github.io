function showSection(sectionId) {

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
section.classList.add("hidden");
});

document.getElementById(sectionId).classList.remove("hidden");

}

// Function to fetch a random quote
async function loadQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        document.getElementById("quote-text").innerText = `"${data.content}"`;
        document.getElementById("quote-author").innerText = `— ${data.author}`;
    } catch (error) {
        console.error(error);
        // Fallback quote
        document.getElementById("quote-text").innerText =
            "In science the important thing is not to stop questioning.";
        document.getElementById("quote-author").innerText =
            "— Albert Einstein";
    }
}

// Load quote automatically when page loads
window.onload = loadQuote;
