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

function updateDateTime(){

const now = new Date();

/* Date */
const date = now.toLocaleDateString('en-IN', {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
});

/* Time */
const time = now.toLocaleTimeString('en-IN', {
hour12: false
});

/* Combine */
const full = date + " | " + time;

/* Put in footer */
const el = document.getElementById("time-display");
if(el){
el.innerText = full;
}

}

/* Run continuously */
setInterval(updateDateTime, 1000);

/* Run once immediately */
updateDateTime();

const electionPassword = "GE61";

const electionCategories = [
"Lokkorgiri",
"Connectivity",
"Contribution to the Republic",
"Entertainment",
"Responsibility",
"Leadership",
"Helpfulness"
];

const electionCandidates = [
"Anish Kumar Pal",
"Arif Ahmed Begg",
"Arshad Khan",
"Ayushi Singh",
"Shamik Ghosh"
];

function unlockElection(){
const pass = document.getElementById("election-pass").value;

if(pass === electionPassword){
document.getElementById("election-form-box").classList.remove("hidden");
document.getElementById("election-msg").innerText = "Form unlocked.";
buildElectionForm();
}
else{
document.getElementById("election-msg").innerText = "Wrong password.";
}
}

function buildElectionForm(){
const box = document.getElementById("electionCategories");
box.innerHTML = "";

electionCategories.forEach((cat, i) => {
box.innerHTML += `
<div class="category-box">
<h3>${cat}</h3>

<label>First Preference — 50 points</label>
<select id="cat${i}_first" required>
<option value="">Select candidate</option>
${candidateOptions()}
</select>

<label>Second Preference — 30 points</label>
<select id="cat${i}_second" required>
<option value="">Select candidate</option>
${candidateOptions()}
</select>

<label>Third Preference — 15 points</label>
<select id="cat${i}_third" required>
<option value="">Select candidate</option>
${candidateOptions()}
</select>

<label>Fourth Preference — 10 points</label>
<select id="cat${i}_fourth" required>
<option value="">Select candidate</option>
${candidateOptions()}
</select>
</div>
`;
});
}

function candidateOptions(){
return electionCandidates.map(name => `<option value="${name}">${name}</option>`).join("");
}

function submitElection(){
const name = document.getElementById("voterName").value;
const email = document.getElementById("voterEmail").value;

if(!name || !email){
alert("Please enter your name and email.");
return;
}

for(let i = 0; i < electionCategories.length; i++){

const selected = [
document.getElementById(`cat${i}_first`).value,
document.getElementById(`cat${i}_second`).value,
document.getElementById(`cat${i}_third`).value,
document.getElementById(`cat${i}_fourth`).value
];

if(selected.includes("")){
alert("Please complete all preferences.");
return;
}

if(new Set(selected).size !== selected.length){
alert("Do not repeat the same candidate in one category.");
return;
}
}

alert("Vote recorded on this page. For permanent storage, connect Firebase or Google Forms backend.");
}
