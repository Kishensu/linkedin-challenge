const profileData = {
    username: "Kishen S",
    jobTitle: "Kishen S, Software Engineer",
    profilePicture: "./assets/images/083C48D9-3895-43DC-9233-F66BAEB427BF_1_105_c.jpeg"
};

function updateProfileData() {

const getUsername = document.querySelector('.nav__username');
const getJobTitle = document.querySelector('.profile-card__title');
const getProfilePic = document.querySelector('.profile-pic');

getUsername.innerHTML = profileData.username;
getJobTitle.innerHTML = profileData.jobTitle;
getProfilePic.src = profileData.profilePicture;

}

updateProfileData();