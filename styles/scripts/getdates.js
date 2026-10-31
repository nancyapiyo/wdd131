// Dynamically populate the current year in the footer
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically populate the last modified date in the footer
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;