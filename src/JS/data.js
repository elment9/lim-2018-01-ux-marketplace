const home = document.getElementById('home');
const store = document.getElementById('store');
const btnProduct = document.getElementById('btn-product');

store.style.display = "none";
const showStore = () => {
    store.style.display = "block";
    home.style.display = "none";
}

btnProduct.addEventListener('click', showStore)
