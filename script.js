// JavaScript: Validate file upload

// Select the file input and listen for changes
const fileInput = document.getElementById('file-upload');
const fileNameDisplay = document.createElement('p'); // Create an element to display the file name
fileNameDisplay.style.color = '#333';
fileNameDisplay.style.fontSize = '0.9em';
fileNameDisplay.style.marginTop = '10px';

// Append the file name display element below the file input
fileInput.parentNode.appendChild(fileNameDisplay);

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
        // Check the file extension
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        if (fileExtension !== 'pdf') {
            // Show an alert if the file is not a PDF
            alert('Bemærk: Du er ved at vedhæfte et dokument der er redigerbart.\nFor at dokumentationen kan godkendes, kræves det at den vedhæftes i et ikke-redigerbart format, eksempelvis som en PDF-fil.');
            
            // Clear the file input and reset the file name display
            fileInput.value = '';
            fileNameDisplay.textContent = '';
        } else {
            // Update the file name display if the file is a PDF
            fileNameDisplay.textContent = `Vedhæftet fil: ${fileName}`;
        }
    } else {
        // Clear the file name display if no file is selected
        fileNameDisplay.textContent = '';
    }
});

// Select the "Næste" button and add a click event listener
const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', function(event) {
    if (!fileInput.value) {
        // Show a confirmation dialog if no file is uploaded
        const proceed = confirm('Bemærk: Du mangler at vedhæfte dokumentation. Er du sikker på du vil gå videre?');
        if (!proceed) {
            // Prevent navigation if the user cancels
            event.preventDefault();
        }
    }
});
