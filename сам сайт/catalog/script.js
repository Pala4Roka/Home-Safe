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

// Sample product data (replace with actual product data from your backend or API)
const products = [
    { name: 'Средства для мытья посуды', image: '../gallery/product1.jpg', price: '667 руб.', category: 'Категория 1', year: 2022 },
    { name: 'Средства для стирки', image: '../gallery/product2.jpg', price: '1500 руб.', category: 'Категория 2', year: 2023 },
    { name: 'Средства для мытья посуды', image: '../gallery/product3.jpg', price: '90 руб.', category: 'Категория 1', year: 2002 },
    { name: 'Средства для стирки', image: '../gallery/product4.webp', price: '190 руб.', category: 'Категория 2', year: 1997 },
    // Add more product entries as needed
];

const cart = [];

// Function to render product cards
function renderProductCards() {
    const productListContainer = document.getElementById('productList');
    productListContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Year: ${product.year}</p>
            <button onclick="addToCart('${product.name}', '${product.price}')">Добавить в корзину</button>
        `;

        productListContainer.appendChild(productCard);
    });
}

// Function to add product to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function renderCart() {
    const cartSection = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cartItems');
    const checkoutButton = document.createElement('button');

    cartItemsContainer.innerHTML = '';
    checkoutButton.textContent = 'Купить';
    checkoutButton.id = 'checkoutButton';
    checkoutButton.onclick = checkout;

    if (cart.length === 0) {
        cartItemsContainer.textContent = 'Your cart is empty.';
        checkoutButton.disabled = true;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.textContent = `${item.name} - ${item.price}`;
            cartItemsContainer.appendChild(cartItem);
        });
        checkoutButton.disabled = false;
    }

    // Clear and append cart items and checkout button
    cartSection.innerHTML = '';
    cartSection.appendChild(cartItemsContainer);
    cartSection.appendChild(checkoutButton);
}

function checkout() {
    // Implement your checkout logic here
    alert('Checkout button clicked! Implement your checkout logic.');
}

// Function to toggle the visibility of the cart
function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartSection.classList.toggle('hidden');
}

// Function to sort products based on the selected option
function sortProducts() {
    const sortBy = document.getElementById('sortBy').value;

    switch (sortBy) {
        case 'new':
            // Sorting logic for newest products
            products.sort((a, b) => b.year - a.year);
            break;
        case 'name':
            // Sorting logic for product names
            products.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price':
            // Sorting logic for product prices
            products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
            break;
        case 'year':
            // Sorting logic for production year
            products.sort((a, b) => a.year - b.year);
            break;
        default:
            break;
    }

    renderProductCards();
}

// Function to filter products based on the selected category
function filterProducts() {
    const filterCategory = document.getElementById('filterCategory').value;

    const filteredProducts = filterCategory === 'all' ? products : products.filter(product => product.category === filterCategory);

    renderProductCards(filteredProducts);
}

// Initial rendering of product cards
renderProductCards();