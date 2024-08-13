document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('htmlFileInput');
    const runButton = document.getElementById('runHtmlButton');

    if (fileInput && runButton) {
        runButton.addEventListener('click', function() {
            const file = fileInput.files[0];

            if (!file) {
                alert('Please select an HTML file.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                const htmlContent = event.target.result;
                openHtmlInNewWindow(htmlContent);
            };
            reader.readAsText(file);
        });
    } else {
        console.error('HTML elements not found');
    }
});

// Function to open the uploaded HTML content in a new window
function openHtmlInNewWindow(htmlContent) {
    // Create a Blob from the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Open the Blob URL in a new tab
    window.open(url, '_blank');
}
