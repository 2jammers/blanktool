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
    // Open a new window with about:blank
    const newWindow = window.open('about:blank', '_blank');

    // Function to write HTML content to the new window
    function writeContentToWindow() {
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(htmlContent);
            newWindow.document.close();
        }
    }

    // Wait until the new window is fully loaded
    newWindow.onload = writeContentToWindow;

    // If the onload event doesn't fire, handle it as a fallback
    setTimeout(writeContentToWindow, 1000);
}
