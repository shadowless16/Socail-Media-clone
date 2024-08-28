document.querySelector('.post-button').addEventListener('click', function() {
    const postInput = document.querySelector('.post-input');
    const postContent = postInput.value.trim();

    if (postContent !== "") {
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <div class="post-user">You</div>
            <div class="post-content">${postContent}</div>
            <div class="post-actions">
                <button>Like</button>
                <button>Comment</button>
            </div>
        `;
        document.querySelector('.feed').prepend(newPost);
        postInput.value = '';
    }
});
