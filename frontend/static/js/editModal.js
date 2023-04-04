function getPostInfo(postId) {
    return new Promise((resolve, reject) => {
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
            resolve(data);
        }
    )
    });
};



document.addEventListener('DOMContentLoaded', () => {
    const editModal = document.getElementById('editModal');

    editModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const postId = button.getAttribute('data-bs-id');
        
        getPostInfo(postId).then((postInfo) => {
            editModal.querySelector('input#title-name').value = postInfo['title']
            editModal.querySelector('input#author-name').value = postInfo['author']
            editModal.querySelector('textarea#blog-text').value = postInfo['content']
            
        editModal.querySelector('h1#editModalLabel').textContent = `Редактивировать пост с id = ${postId}`;

        editModal.addEventListener('hidden.bs.modal', () => {
            console.log('modal element completely hidden!');
        });
        
        editModal.querySelector('.btn-primary').addEventListener('click', (event) => {
            res = fetch('http://127.0.0.1:3000/blog/posts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author: editModal.querySelector('input#title-name').value,
                    title: editModal.querySelector('input#author-name').value,
                    content: editModal.querySelector('textarea#blog-text').value,
                    _id: postId
                })
            }).then(() => {
                window.location.href = "http://127.0.0.1:3000/blog";
            }).catch(error => console.log(error));
        });
    });
    });
});
