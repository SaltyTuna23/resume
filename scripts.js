// Get the image element by its ID
const profilePhoto = document.getElementById('profilePhoto');

// Add hover effect using JavaScript
profilePhoto.addEventListener('mouseover', function() {
    profilePhoto.style.transform = 'scale(1.1)'; // Scale up the image
    profilePhoto.style.transition = 'transform 0.3s ease'; // Smooth transition
});

profilePhoto.addEventListener('mouseout', function() {
    profilePhoto.style.transform = 'scale(1)'; // Reset to original size
});
