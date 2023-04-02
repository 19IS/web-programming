document.addEventListener("DOMContentLoaded", () => {
    const deleteModal = document.getElementById('deleteModal');

    deleteModal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget;

        const postId = button.getAttribute('data-bs-id')

        const modalTitle = deleteModal.querySelector('.modal-body')

        modalTitle.textContent = `Удалить запись с id:` + postId;

        deleteModal.addEventListener('hidden.bs.modal', () => {
            console.log('modal element completely hidden!');
        });

        deleteModal.querySelector('.btn-warning').addEventListener('click', (event) => {
            fetch('http://127.0.0.1:3000/blog/posts/' + postId, {
                method: 'DELETE'
            }).then(() => {
                window.location.href = "http://127.0.0.1:3000/blog";
            });
        });
    });
});
