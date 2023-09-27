// Get the username and password fields
const usernameField = document.querySelector('input[name="username"]');
const passwordField = document.querySelector('input[name="password"]');

// Add an event listener to the login button
document.querySelector('input[type="submit"]').addEventListener('click', async () => {
// Validate the username and password
if (usernameField.value === '' || passwordField.value === '') {
alert('Please enter a username and password.');
return;
}

// Try to log in the user
const response = await fetch('/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
username: usernameField.value,
password: passwordField.value
})
});

// If the login was successful, redirect the user to the home page
if (response.status === 200) {
window.location.href = '/';
} else {
// If the login was unsuccessful, display an error message
alert('Incorrect username or password.');
}
});
