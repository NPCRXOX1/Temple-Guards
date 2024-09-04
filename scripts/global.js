// global.js

// Function to create and append the light mode toggle button
function createLightModeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('light-mode-toggle');
    toggleButton.textContent = 'Toggle Light Mode';

    // Append the toggle button to the body or header
    document.body.appendChild(toggleButton);

    // Add click event listener to toggle light mode
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('light-mode', isLightMode ? 'enabled' : 'disabled');
    });
}

// Function to check if light mode is enabled (for persisting the mode across pages)
function checkLightMode() {
    if (localStorage.getItem('light-mode') === 'enabled') {
        document.body.classList.add('light-mode');
    }
}

// Function to create and append a progress tracking bar
function createProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-tracking');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.id = 'progressBar';

    progressContainer.appendChild(progressBar);
    document.body.insertBefore(progressContainer, document.body.firstChild);
}

// Function to update the progress bar (you can call this dynamically)
function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
}

// Function to handle page transitions with animation
function animatePageTransition() {
    document.body.classList.add('page-transition');
    window.addEventListener('beforeunload', () => {
        document.body.classList.add('page-transition-out');
    });
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    createLightModeToggle();
    checkLightMode();
    createProgressBar();
    updateProgressBar(0); // Start with 0% progress; you can update dynamically based on page content
    animatePageTransition(); // Enable page transitions
});
