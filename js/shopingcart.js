const displayLocalStorageCart = () => {
    const cart = getCart();
    for(name in cart) {
        displayProduct(name);
    }
}
const addItem = () => {
    const namefield = document.getElementById('product_name');
    const name = namefield.value;
    if(!name) {
        return;
    }
    // display ui
    displayProduct(name)

    // add local storage
    addProductToCart(name)

    // clear value
    namefield.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = name;
    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}


const addProductToCart = name => {
    const cart = getCart()
    if(cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}

displayLocalStorageCart();