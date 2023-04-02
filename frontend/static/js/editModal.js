function getPostInfo(postId) {
    fetch('http://127.0.0.1:3000/blog/posts/' + postId, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' 
        }
    }).then(
        response => response.json()
    ).then(
        data => {
            console.log(data)
            return data
        }
    )
};



document.addEventListener('DOMContentLoaded', () => {
    const editModal = document.getElementById('editModal');

    editModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const postId = button.getAttribute('data-bs-id');
        const modalTitle = editModal.querySelector('input#title-name');
        const modalAuthor = editModal.querySelector('input#author-name');
        const modalBlogText = editModal.querySelector('textarea#blog-text');
        const postInfo = getPostInfo(postId);

        editModal.querySelector('h1#editModalLabel').textContent = `Редактивировать пост с id = ${postId}`;

        editModal.addEventListener('hidden.bs.modal', () => {
            console.log('modal element completely hidden!');
        });

        editModal.querySelector('.btn-primary').addEventListener('click', (event) => {
            res = fetch('http://127.0.0.1:3000/blog/posts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author: modalAuthor.value,
                    title: modalTitle.value,
                    content: modalBlogText.value,
                    picture: null,
                    _id: postId
                })
            }).then(() => {
                window.location.href = "http://127.0.0.1:3000/blog";
            }).catch(error => console.log(error));
        });

    });
});
