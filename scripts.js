document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data);
        // Handle successful login (e.g., store token, redirect)
        alert('Login successful!');
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed. Please try again.');
    }
});

document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        console.log(data);
        // Handle successful registration
        alert('Registration successful!');
    } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed. Please try again.');
    }
});
