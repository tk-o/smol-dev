```javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
    form.addEventListener('submit', submitForm);
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2,3,4,5,6,7,8,9}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function submitForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const subscriptionFormData = {
        email: email
    };

    // Here you would typically send the form data to a server or an email service
    console.log('Form submitted:', subscriptionFormData);
}
```