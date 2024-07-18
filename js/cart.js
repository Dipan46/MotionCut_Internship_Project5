document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    window.removeFromCart = (id) => {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
        if (itemIndex > -1) {
            const item = cart[itemIndex];
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
            updateCart();
            displayMessage(`${item.name} removed from cart`);
        }
    };

    const renderCart = () => {
        const cartContainer = document.getElementById('cartItems');
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'card';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <div class="product-details">
                    <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
                    <button class="remove-btn" onclick='removeFromCart(${item.id})'>Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });
    };

    const displayMessage = () => {
        alert("Item Removed!");
    };

    renderCart();
});
