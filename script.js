const listingsContainer = document.getElementById('listings');
const itemForm = document.getElementById('item-form');

async function fetchListings() {
    // Call your smart contract to get all listings
    const listings = await getListingsFromContract(); // Replace with actual call
    listingsContainer.innerHTML = '';
    listings.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'listing';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: ${item.price} crypto</p>
            <button onclick="purchaseItem(${item.id})">Buy</button>
        `;
        listingsContainer.appendChild(itemElement);
    });
}

async function postItem(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;

    // Call your smart contract to create a new item
    await createItemInContract(title, price); // Replace with actual call
    fetchListings(); // Refresh listings
}

async function purchaseItem(itemId) {
    // Call your smart contract to purchase the item
    await purchaseItemInContract(itemId); // Replace with actual call
    fetchListings(); // Refresh listings
}

itemForm.addEventListener('submit', postItem);
fetchListings();
