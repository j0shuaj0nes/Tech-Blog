const editFormHandler = async (event) => {
    event.preventDefault()
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.edit-project-form')
    .addEventListener('submit', editFormHandler);
