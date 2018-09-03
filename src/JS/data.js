const home = document.getElementById('home');
const nosotros = document.getElementById('nosotros');
const all = document.getElementById('all');
const store = document.getElementById('store');
const btnProduct = document.getElementById('btn-product');
const btnProduct2 = document.getElementById('btn-product2');

store.style.display = "none";
const showStore = () => {
    store.style.display = "block";
    home.style.display = "none";
}
const showHome = () => {
    store.style.display = "none";
    home.style.display = "block";
}

btnProduct.addEventListener('click', showStore)
nosotros.addEventListener('click', showHome)
all.addEventListener('click', showStore)