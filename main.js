// Get the button and the skills section by their IDs
var toggleButton = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills-section");
// Check if elements exist to avoid errors
if (toggleButton && skillsSection) {
    // Add an event listener to the button
    toggleButton.addEventListener("click", function () {
        // Toggle the display style between 'none' (hidden) and 'block' (visible)
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Show the section
        }
        else {
            skillsSection.style.display = "none"; // Hide the section
        }
    });
}
