document.addEventListener('DOMContentLoaded', () => {
    const editModal = document.getElementById('editModal');

    editModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const postId = button.getAttribute('data-bs-id')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        const modalTitle = deleteModal.getElementById('title-name');
        const modalAuthor = deleteModal.getElementById('author-name');
        const modelBlogText = deleteModal.getElementById('blog-text');
        const modalBodyInput = deleteModal.querySelector('.modal-dialog input')

        // modalTitle.textContent = `Редактивировать запись с id:` + postId;

        editModal.addEventListener('hidden.bs.modal', () => {
            console.log('modal element completely hidden!');
        });

        editModal.querySelector('.btn-primary').addEventListener('click', (event) => {
            fetch('http://127.0.0.1:3000/blog/posts/' + postId, {
                method: 'PUT',
                body: {
                    "author": modalAuthor.value,
                    "title": modalTitle.value,
                    "content": modelBlogText.value,
                    "picture": null
                }
            }).then(() => {
                window.location.href = "http://127.0.0.1:3000/blog";
            });
        });

    });
});
