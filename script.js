document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Post this email to your mailing list server or API
    alert('Thank you for your subscription!');
});
