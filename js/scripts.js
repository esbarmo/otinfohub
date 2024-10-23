function filterTerms() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const terms = document.querySelectorAll(".term");
    const sections = document.querySelectorAll("section#glossary h2");

    // Iterate over each term and hide/show based on the search input
    terms.forEach(term => {
        const title = term.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchInput)) {
            term.style.display = "block";
        } else {
            term.style.display = "none";
        }
    });

    // Check each section (letter header) and see if it has any visible terms under it
    sections.forEach(section => {
        const sectionId = section.id; // Get the ID of the section (A, B, etc.)
        const sectionTerms = document.querySelectorAll(`.${sectionId}-term`); // All terms under this letter
        
        let anyVisibleTerms = Array.from(sectionTerms).some(term => term.style.display === "block");

        // Show or hide the section header based on whether its terms are visible
        if (anyVisibleTerms) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}