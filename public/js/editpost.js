const editposthandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'DELETE',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert('Failed to create post');
        }
    }
};

document.querySelector('.edit-form').addEventListener('edit', editposthandler);