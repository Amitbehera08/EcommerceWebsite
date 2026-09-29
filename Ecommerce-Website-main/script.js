// ============================================
// PRODUCT DATA
// ============================================

const products = [
    {
        id: 1,
        name: "Men's T-Shirt",
        category: "mens",
        price: 19.99,
        originalPrice: 24.99,
        image: "img/products/f1.jpg",
        rating: 4.5,
        reviews: 128,
        discount: 20
    },
    {
        id: 2,
        name: "Evening Dress",
        category: "womens",
        price: 34.99,
        originalPrice: 39.99,
        image: "img/products/f2.jpg",
        rating: 5,
        reviews: 256,
        discount: 15
    },
    {
        id: 3,
        name: "Sport Shoes",
        category: "accessories",
        price: 44.99,
        originalPrice: 59.99,
        image: "img/products/f3.jpg",
        rating: 4,
        reviews: 89,
        discount: 25
    },
    {
        id: 4,
        name: "Designer Bag",
        category: "accessories",
        price: 79.99,
        originalPrice: 89.99,
        image: "img/products/f4.jpg",
        rating: 4.5,
        reviews: 342,
        discount: 10
    },
    {
        id: 5,
        name: "Men's Jeans",
        category: "mens",
        price: 49.99,
        originalPrice: 69.99,
        image: "img/products/f5.jpg",
        rating: 4.3,
        reviews: 214,
        discount: 28
    },
    {
        id: 6,
        name: "Women's Jacket",
        category: "womens",
        price: 59.99,
        originalPrice: 79.99,
        image: "img/products/f6.jpg",
        rating: 4.7,
        reviews: 178,
        discount: 25
    },
    {
        id: 7,
        name: "Casual Sneakers",
        category: "accessories",
        price: 64.99,
        originalPrice: 84.99,
        image: "img/products/f7.jpg",
        rating: 4.4,
        reviews: 321,
        discount: 23
    },
    {
        id: 8,
        name: "Summer Shirt",
        category: "mens",
        price: 24.99,
        originalPrice: 34.99,
        image: "img/products/f8.jpg",
        rating: 4.2,
        reviews: 95,
        discount: 28
    },
    {
        id: 9,
        name: "Casual Pants",
        category: "womens",
        price: 39.99,
        originalPrice: 54.99,
        image: "img/products/n1.jpg",
        rating: 4.5,
        reviews: 156,
        discount: 27
    },
    {
        id: 10,
        name: "Leather Belt",
        category: "accessories",
        price: 29.99,
        originalPrice: 39.99,
        image: "img/products/n2.jpg",
        rating: 4.6,
        reviews: 203,
        discount: 25
    },
    {
        id: 11,
        name: "Office Blazer",
        category: "mens",
        price: 74.99,
        originalPrice: 99.99,
        image: "img/products/n3.jpg",
        rating: 4.8,
        reviews: 189,
        discount: 25
    },
    {
        id: 12,
        name: "Elegant Shoes",
        category: "womens",
        price: 54.99,
        originalPrice: 74.99,
        image: "img/products/n4.jpg",
        rating: 4.7,
        reviews: 267,
        discount: 26
    },
    {
        id: 13,
        name: "Casual Hat",
        category: "accessories",
        price: 19.99,
        originalPrice: 29.99,
        image: "img/products/n5.jpg",
        rating: 4.1,
        reviews: 142,
        discount: 33
    },
    {
        id: 14,
        name: "Wool Sweater",
        category: "mens",
        price: 44.99,
        originalPrice: 64.99,
        image: "img/products/n6.jpg",
        rating: 4.6,
        reviews: 234,
        discount: 30
    },
    {
        id: 15,
        name: "Maxi Skirt",
        category: "womens",
        price: 39.99,
        originalPrice: 59.99,
        image: "img/products/n7.jpg",
        rating: 4.4,
        reviews: 198,
        discount: 33
    },
    {
        id: 16,
        name: "Sunglasses",
        category: "accessories",
        price: 34.99,
        originalPrice: 49.99,
        image: "img/products/n8.jpg",
        rating: 4.5,
        reviews: 312,
        discount: 30
    }
];

// ============================================
// SHOPPING CART STATE
// ============================================

let cart = [];
let currentFilter = "all";

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartUI();
    initializeEventListeners();
    renderProducts();
});

// ============================================
// LOCAL STORAGE MANAGEMENT
// ============================================

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ============================================
// CART FUNCTIONS
// ============================================

function addToCart(productId, name, price, image) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart page if we're on it
    if (document.getElementById('cartItems')) {
        renderCartItems();
        updateCartSummary();
    }

    // Update checkout page if we're on it
    if (document.getElementById('checkoutItems')) {
        renderCheckoutItems();
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartItemsContainer.style.display = 'flex';
    document.querySelector('.cart-summary').style.display = 'block';
    emptyCart.style.display = 'none';

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <div class="cart-item-controls">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-price">
                <div class="price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

function renderCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkoutItems');

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p style="text-align: center; color: #999;">No items in cart</p>';
        return;
    }

    let subtotal = 0;
    checkoutItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="checkout-item">
                <div class="checkout-item-name">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
                    <div>
                        <small>${item.name}</small><br>
                        <small>Qty: ${item.quantity}</small>
                    </div>
                </div>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    }).join('');

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('checkoutSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('checkoutTax').textContent = '$' + tax.toFixed(2);
    document.getElementById('checkoutTotal').textContent = '$' + total.toFixed(2);
}

// ============================================
// PRODUCT FILTERING & SEARCH
// ============================================

function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');

    if (!productsGrid) return;

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No products found</p>';
        return;
    }

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category.replace(/([A-Z])/g, ' $1').trim()}</p>
                <div class="rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="price-section">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, '${product.name.replace("'", "\\'")}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

function filterProducts(category) {
    currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });

    // Filter and render products
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    }
}

function searchProducts(query) {
    const searchQuery = query.toLowerCase().trim();

    if (searchQuery === '') {
        currentFilter === 'all' ? renderProducts(products) : filterProducts(currentFilter);
        return;
    }

    const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );

    renderProducts(searchResults);
}

// ============================================
// FORM VALIDATION
// ============================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function validateCardNumber(cardNumber) {
    const cardRegex = /^[\d\s]{13,19}$/;
    return cardRegex.test(cardNumber.replace(/\s/g, ''));
}

function validateExpiry(expiry) {
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expiryRegex.test(expiry);
}

function validateCVV(cvv) {
    const cvvRegex = /^\d{3,4}$/;
    return cvvRegex.test(cvv);
}

function validateZipCode(zip) {
    const zipRegex = /^[\d\w\s\-]{3,10}$/;
    return zipRegex.test(zip);
}

// ============================================
// CHECKOUT FORM HANDLING
// ============================================

function validateCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return false;

    let isValid = true;
    const fields = form.querySelectorAll('input[required], select[required]');

    fields.forEach(field => {
        const value = field.value.trim();
        const fieldGroup = field.closest('.form-group');

        if (!value) {
            fieldGroup.classList.add('error');
            isValid = false;
        } else {
            // Specific validations
            if (field.id === 'email' && !validateEmail(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter a valid email';
                isValid = false;
            } else if (field.id === 'phone' && !validatePhoneNumber(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter a valid phone number';
                isValid = false;
            } else if (field.id === 'zip' && !validateZipCode(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter a valid ZIP code';
                isValid = false;
            } else if (field.id === 'cardNumber' && !validateCardNumber(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter a valid card number';
                isValid = false;
            } else if (field.id === 'expiry' && !validateExpiry(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter expiry in MM/YY format';
                isValid = false;
            } else if (field.id === 'cvv' && !validateCVV(value)) {
                fieldGroup.classList.add('error');
                fieldGroup.querySelector('.error-message').textContent = 'Please enter a valid CVV';
                isValid = false;
            } else {
                fieldGroup.classList.remove('error');
                const errorMsg = fieldGroup.querySelector('.error-message');
                if (errorMsg) errorMsg.textContent = 'This field is required';
            }
        }
    });

    // Validate terms and conditions checkbox
    const termsCheckbox = form.querySelector('#terms');
    const termsGroup = termsCheckbox.closest('.form-group');

    if (!termsCheckbox.checked) {
        termsGroup.classList.add('error');
        isValid = false;
    } else {
        termsGroup.classList.remove('error');
    }

    return isValid;
}

function submitCheckoutForm(event) {
    event.preventDefault();

    if (!validateCheckoutForm()) {
        showNotification('Please fill in all required fields correctly', 'error');
        return;
    }

    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }

    // Simulate payment processing
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Clear cart on successful checkout
        cart = [];
        saveCart();
        updateCartUI();

        showNotification('Order placed successfully! Thank you for your purchase.', 'success');
        
        // Redirect to home page after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 2000);
}

function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

// ============================================
// EVENT LISTENERS INITIALIZATION
// ============================================

function initializeEventListeners() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchProducts(searchInput.value);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts(searchInput.value);
            }
        });
    }

    // Category filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterProducts(category);
        });
    });

    // Cart modal
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close');

    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', () => {
            cartModal.style.display = 'block';
        });
    }

    if (closeBtn && cartModal) {
        closeBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }

    if (cartModal) {
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', submitCheckoutForm);

        // Format card input
        const cardNumberInput = document.getElementById('cardNumber');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\s/g, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formattedValue;
            });
        }
    }

    // Display checkout items on page load
    if (window.location.pathname.includes('checkout')) {
        renderCheckoutItems();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification show ' + type;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('emailInput');
    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (!email) {
        showNotification('Please enter your email', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    showNotification('Thank you for subscribing!', 'success');
    emailInput.value = '';
}

// Format card number with spaces
function formatCardNumber(input) {
    const value = input.value.replace(/\s/g, '');
    const parts = value.match(/.{1,4}/g) || [];
    input.value = parts.join(' ');
}

// Helper function to format price
function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2);
}
