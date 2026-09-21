// Function alang sa Pag-Search sa Baligya
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        const name = item.querySelector('.product-name').innerText.toLowerCase();
        if (name.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}