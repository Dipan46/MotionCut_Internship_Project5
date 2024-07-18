document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        { text: 'Great food!', date: '2023-01-01' },
        { text: 'Loved the paneer.', date: '2023-02-15' }
    ];

    const reviewsList = document.getElementById('reviewsList');
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('card');
        reviewItem.innerHTML = `
            <div class="product-details">
                <h2>Review</h2>
                <p>${review.text}</p>
                <p class="price">${review.date}</p>
            </div>
        `;
        reviewsList.appendChild(reviewItem);
    });

    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reviewText = document.getElementById('review').value;
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('card');
        reviewItem.innerHTML = `
            <div class="product-details">
                <h2>Review</h2>
                <p>${reviewText}</p>
                <p class="price">${new Date().toISOString().split('T')[0]}</p>
            </div>
        `;
        reviewsList.appendChild(reviewItem);
        document.getElementById('review').value = '';
    });
});
