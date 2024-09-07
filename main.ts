// Get the button and skills section elements
const toggleButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLFieldSetElement;

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the display property between 'block' and 'none'
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
