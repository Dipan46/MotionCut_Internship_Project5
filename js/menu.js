document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { id: 1, name: 'Chicken Curry', price: 150, image: 'images/chicken_curry.jpg' },
        { id: 2, name: 'Veg Biryani', price: 200, image: 'images/veg_biryani.jpg' },
        { id: 3, name: 'Paneer Masala', price: 130, image: 'images/paneer_butter_masala.jpg' },
        { id: 4, name: 'Chicken Curry', price: 150, image: 'images/chicken_curry.jpg' },
        { id: 5, name: 'Veg Biryani', price: 200, image: 'images/veg_biryani.jpg' },
        { id: 6, name: 'Paneer Masala', price: 130, image: 'images/paneer_butter_masala.jpg' },
        { id: 7, name: 'Chicken Curry', price: 150, image: 'images/chicken_curry.jpg' },
        { id: 8, name: 'Veg Biryani', price: 200, image: 'images/veg_biryani.jpg' },
        { id: 9, name: 'Paneer Masala', price: 130, image: 'images/paneer_butter_masala.jpg' }
        // Add more items with image URLs as needed
    ];

    const menuContainer = document.getElementById('menuItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    const addToCart = (item) => {
        setTimeout(function () {
            alert('This is a delayed alert!');
        }, 300);
        const itemInCart = cart.find(cartItem => cartItem.id === item.id);
        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        updateCart();
        displayMessage(`${item.name} added to cart`);
    };

    const renderCart = () => {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.textContent = `Cart (${cartCount})`;
        }
    };

    const displayMessage = (message) => {
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerText = message;
        setTimeout(() => {
            messageContainer.innerText = '';
        }, 3000);
    };

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('card');
        menuItem.innerHTML = `
<img src="${item.image}" alt="${item.name}" class="product-image">
<div class="product-details">
    <h2>${item.name}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis sed molestiae, minus, modi ex molestias
        numquam unde culpa, ullam eveniet laudantium nostrum natus et odit sint ab dolorem eius!</p>
    <p class="price">₹${item.price}</p>
    <button class="cta" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
</div>
`;
        menuContainer.appendChild(menuItem);
    });

    window.addToCart = addToCart;
    renderCart(); // Render the cart count on page load
});