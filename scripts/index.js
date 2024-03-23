const profileData = {
    username: "Kishen",
    jobTitle: "Kishen Suresh Kumar, Software Engineer",
    profilePicture: "./assets/images/083C48D9-3895-43DC-9233-F66BAEB427BF_1_105_c.jpeg"
};

function updateProfileData() {

const getUsername = document.querySelectorAll('.newUsername');
const getJobTitle = document.querySelector('.profileTitle');
const getProfilePic = document.querySelectorAll('.profile-pic');

getUsername.forEach(element => {
    element.innerHTML = profileData.username;
});

getJobTitle.innerHTML = profileData.jobTitle;

getProfilePic.forEach(element => {
    element.src = profileData.profilePicture;
});

}

updateProfileData();