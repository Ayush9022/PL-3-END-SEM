let cartCount = 0;
let cartItems = [];

function addToCart(productName, productPrice) {
    cartCount++;
    updateCartCount(cartCount);


    cartItems.push({ name: productName, price: productPrice });

}

function updateCartCount(count) {
    document.getElementById('cartCount').innerText = count;
}

function showCart() {

    document.getElementById('cartModal').style.display = 'block';

    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}
