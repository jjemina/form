document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var valid = form.checkValidity();

    if (!valid) {
        var errorElements = form.querySelectorAll('.error');
        errorElements.forEach(function(errorElement) {
            var input = errorElement.previousElementSibling;
            if (!input.checkValidity()) {
                errorElement.textContent = input.validationMessage;
            } else {
                errorElement.textContent = '';
            }
        });
    } else {
        // Form is valid, proceed with submission (e.g., AJAX call)
        alert('Form submitted successfully!');
    }
});
