
function loadUserProfile() {
    const getUsernameElements = document.querySelectorAll('.newUsername');
    const getJobTitleElement = document.querySelector('.profileTitle');
    const getProfilePicElements = document.querySelectorAll('.profile-pic');

    getUsernameElements.forEach(element => {
        element.innerHTML = userProfile.username;
    });

    getJobTitleElement.innerHTML = userProfile.jobTitle;

    getProfilePicElements.forEach(element => {
        element.src = userProfile.profilePicture;
    });
}


function createPost() {
    const postInput = document.querySelector('input[type="text"]').value;
     {
        const postsSection = document.querySelector('.posts');

  
        const newPost = document.createElement('div');
        newPost.classList.add('posts__item');

     
        const postUsername = document.createElement('div');
        postUsername.classList.add('posts__username');
        postUsername.textContent = userProfile.username + ' Posted';
        newPost.appendChild(postUsername);

      
        const postContent = document.createElement('div');
        postContent.classList.add('posts__content');
        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = postInput;
        postContent.appendChild(contentParagraph);
        newPost.appendChild(postContent);

        
        const likeButton = document.createElement('div');
        likeButton.classList.add('posts__like');
        const likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like';
        likeButton.appendChild(likeBtn);
        newPost.appendChild(likeButton);

        
        postsSection.prepend(newPost);

        
        document.querySelector('input[type="text"]').value = '';
    }
}


document.querySelector('.start-post-btn button').addEventListener('click', createPost);


document.addEventListener('DOMContentLoaded', loadUserProfile);




