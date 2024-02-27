// Add any JavaScript functionality here, if needed.
// For example, handling login and registration button clicks.
document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Clicked Login button. Implement your login logic here.');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    alert('Clicked Registration button. Implement your registration logic here.');
});
function redirectToMainPage() {
    // Replace 'your_specific_page.html' with the actual page you want to redirect to
    window.location.href = '../main/index.html';
}
function redirectToAboutPage() {
    // Replace 'your_specific_page.html' with the actual page you want to redirect to
    window.location.href = '../about/index.html';
}
function redirectToCatalogPage() {
    // Replace 'your_specific_page.html' with the actual page you want to redirect to
    window.location.href = '../catalog/index.html';
}
function redirectToHotLinePage() {
    // Replace 'your_specific_page.html' with the actual page you want to redirect to
    window.location.href = '../hotline/index.html';
}

// Add your existing JavaScript code here, if any

const sliderTrack = document.getElementById('sliderTrack');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderTrack.children.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderTrack.children.length) % sliderTrack.children.length;
    updateSlider();
}

function updateSlider() {
    const translateValue = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${translateValue}%)`;
}

// Set up interval to automatically switch slides (adjust timing as needed)
setInterval(nextSlide, 5000);
