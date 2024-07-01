document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, firstname, email, password })
    });

    if (response.ok) {
        window.location.href = '/page'; 
    } else {
        const message = await response.json();
        document.getElementById('message').innerText = message.error;
    }
});

