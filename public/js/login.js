const loginHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username: userName, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to log in');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);

<form class="form login-form p-5 bg-slate-100 w-80 rounded-lg"></form>