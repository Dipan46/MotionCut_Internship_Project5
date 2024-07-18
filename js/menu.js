document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { id: 1, name: 'Chicken Curry', price: 150, image: 'images/chicken_curry.jpg', description: 'A rich and spicy curry made with tender chicken pieces, simmered in a flavorful gravy.' },
        { id: 2, name: 'Veg Biryani', price: 200, image: 'images/veg_biryani.jpg', description: 'A fragrant and flavorful rice dish made with mixed vegetables, aromatic spices, and herbs, typically served with raita or yogurt.' },
        { id: 3, name: 'Paneer Masala', price: 130, image: 'images/paneer_butter_masala.jpg', description: 'Cubes of paneer cooked in a creamy tomato-based gravy, seasoned with Indian spices.' },
        { id: 4, name: 'Momo', price: 150, image: 'images/momo.jpg', description: 'Delicious steamed dumplings filled with seasoned meat or vegetables, typically served with a spicy dipping sauce, popular in Nepal and Tibet.' },
        { id: 5, name: 'Chowmin', price: 200, image: 'images/chowmin.jpg', description: 'A popular stir-fried noodle dish made with mixed vegetables, soy sauce, and sometimes meat or tofu, offering a savory and satisfying meal.' },
        { id: 6, name: 'Soup', price: 130, image: 'images/soup-feat.jpg', description: 'A warm and comforting dish made by simmering vegetables, meat, or fish in a flavorful broth, often enjoyed as an appetizer or a light meal.' },
        // Add more items with image URLs and descriptions as needed
    ];

    const menuContainer = document.getElementById('menuItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    const addToCart = (item) => {
        setTimeout(function () {
            alert('Added to cart!');
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
                <p>${item.description}</p>
                <p class="price">₹${item.price}</p>
                <button class="cta" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    window.addToCart = addToCart;
    renderCart(); // Render the cart count on page load
});
