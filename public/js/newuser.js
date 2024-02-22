const newuserHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#userName-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert('Failed to create user');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', newuserHandler);