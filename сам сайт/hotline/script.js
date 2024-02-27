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
ymaps.ready(function () {
    var map;
    ymaps.geolocation.get().then(function (res) {
        var mapContainer = $('#map'),
            bounds = res.geoObjects.get(0).properties.get('boundedBy'),
            // Рассчитываем видимую область для текущей положения пользователя.
            mapState = ymaps.util.bounds.getCenterAndZoom(
                bounds,
                [mapContainer.width(), mapContainer.height()]
            );
        createMap(mapState);
    }, function (e) {
        // Если местоположение невозможно получить, то просто создаем карту.
        createMap({
            center: [55.751574, 37.573856],
            zoom: 2
        });
    });
    
    function createMap (state) {
        map = new ymaps.Map('map', state);
    }
});