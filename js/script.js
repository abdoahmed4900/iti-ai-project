const allProducts = [
    {
        hotel: "Grand Palace Hotel",
        city: "New York",
        price: 550,
        starRating: 5,
        description: "Experience luxury at its finest in the heart of Manhattan. Our Grand Palace Hotel offers world-class amenities, stunning city views, and exceptional service that will make your stay unforgettable.",
        images: ['https://tuhmxvun.manus.space/assets/hotel1-DblUoNlc.jpg', 'https://tuhmxvun.manus.space/assets/hotel2-DOKstNFX.jpg', 'https://tuhmxvun.manus.space/assets/hotel3-NddmshxU.jpg',],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Water",
                icon: `<i class="fa-solid fa-water"></i>`,
            },
            {
                name: "Spa",
                icon: `<i class="fa-solid fa-spa"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
        ]
    },
    {
        hotel: "Ocean View Resort",
        city: "Miami",
        price: 220,
        starRating: 4,
        description: "Wake up to breathtaking ocean views every morning at our beachfront resort. Perfect for both relaxation and adventure, with direct beach access and premium facilities.",
        images: ['https://tuhmxvun.manus.space/assets/hotel2-DOKstNFX.jpg', 'https://tuhmxvun.manus.space/assets/hotel4-BM2_Ks_P.jpg', 'https://tuhmxvun.manus.space/assets/hotel5-BPUZUmP0.jpg',],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
        ]
    },
    {
        hotel: "Mountain Lodge",
        city: "Colorado",
        price: 150,
        starRating: 4,
        description: "Escape to the mountains and enjoy fresh air, hiking trails, and cozy accommodations. Our lodge offers a perfect retreat from city life with rustic charm and modern comfort.",
        images: ['https://tuhmxvun.manus.space/assets/hotel3-NddmshxU.jpg', 'https://tuhmxvun.manus.space/assets/hotel6-CtawxXqx.jpg', 'https://tuhmxvun.manus.space/assets/hotel1-DblUoNlc.jpg',],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
        ],
    },
    {
        hotel: "City Center Hotel",
        city: "Los Angeles",
        price: 180,
        starRating: 3,
        description: "Indulge in spacious suites with panoramic city views, premium amenities, and personalized service. Perfect for extended stays and special occasions in the entertainment capital.",
        images: ['https://tuhmxvun.manus.space/assets/hotel5-BPUZUmP0.jpg', 'https://tuhmxvun.manus.space/assets/hotel1-DblUoNlc.jpg', 'https://tuhmxvun.manus.space/assets/hotel3-NddmshxU.jpg'],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
        ]
    },
    {
        hotel: "Luxury Suites",
        city: "Chicago",
        price: 400,
        starRating: 3,
        description: "Located in the bustling heart of Chicago, our hotel provides easy access to shopping, dining, and entertainment. Modern rooms with all the amenities you need for business or leisure.",
        images: ['https://tuhmxvun.manus.space/assets/hotel4-BM2_Ks_P.jpg', 'https://tuhmxvun.manus.space/assets/hotel2-DOKstNFX.jpg', 'https://tuhmxvun.manus.space/assets/hotel5-BPUZUmP0.jpg'],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
        ]
    },
    {
        hotel: "Budget Inn",
        city: "Phoenix",
        price: 80,
        starRating: 2,
        description: "Clean, comfortable, and affordable accommodations for budget-conscious travelers. While simple, our inn provides all the essentials for a pleasant stay without breaking the bank.",
        images: ['https://tuhmxvun.manus.space/assets/hotel6-CtawxXqx.jpg', 'https://tuhmxvun.manus.space/assets/hotel4-BM2_Ks_P.jpg', 'https://tuhmxvun.manus.space/assets/hotel2-DOKstNFX.jpg'],
        amenities: [
            {
                name: "Free Wifi",
                icon: `<i class="fa-solid fa-wifi"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Restaurant",
                icon: `<i class="fa-solid fa-utensils"></i>`,
            },
            {
                name: "Room Service",
                icon: `<i class="fa-solid fa-bell-concierge"></i>`,
            },
            {
                name: "Concierge",
                icon: `<i class="fa-solid fa-burger"></i>`,
            },
            {
                name: "Gym",
                icon: `<i class="fa-solid fa-dumbbell"></i>`,
            },
        ],
    },
];

let showedProducts = [...allProducts];

let filters = document.getElementsByClassName("filters-results")[0];

renderProducts();
function isAllSelected(x) {
    return x === "All";
};
function filterData(city, starRating, price) {
    if (!isAllSelected(city)) {
        showedProducts = showedProducts.filter((e) => e.city === city);
    }
    if (!isAllSelected(starRating)) {
        showedProducts = showedProducts.filter((e) => e.starRating == starRating);
    }
    if (!isAllSelected(price)) {
        if (price === "Above 500$") {
            showedProducts = showedProducts.filter((e) => e.price > 500);
        } else if (price === "300$-500$") {
            showedProducts = showedProducts.filter((e) => e.price > 300 && e.price <= 500);
        } else if (price === "Less Than 300$") {
            showedProducts = showedProducts.filter((e) => e.price < 300);
        }
    }
    renderProducts();
    console.log(showedProducts);

    console.log(price + "\n" + city + "\n" + starRating + "\n");
    showedProducts = [...allProducts];
}

function renderProducts() {
    let child = ``;
    for (let index = 0; index < showedProducts.length; index++) {
        child += `
     <div class="filters-result position-relative">
            <img src="${showedProducts[index].images[0]}"
                alt="hotel-image">
            <h3>${showedProducts[index].hotel}</h3>
            <div class="filters-result-location d-flex align-items-start justify-content-start">
                <i class="fa-solid fa-location-dot"></i>
                <p>${showedProducts[index].city}</p>
            </div>
            <div class="filters-result-price-section">
               <p>${showedProducts[index].price}$/night</p>
            </div>
            <div class="filters-result-star-rating">
                ${`<i class="fa-solid fa-star"></i>`.repeat(showedProducts[index].starRating)}
                ${`<i class="fa-solid fa-star" style="color:grey;"></i>`.repeat(5 - showedProducts[index].starRating)}
                <p>(${showedProducts[index].starRating} Stars)</p>
            </div>
            <p>${showedProducts[index].description}</p>
            <button onclick="goToDetails(${index})">View Details</button>
        </div>
    `;
    }
    filters.innerHTML = "";
    filters.innerHTML = child;
}


function goToDetails(index) {
    const product = showedProducts[index];
    window.location.href = '../html/product-details.html';
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
}


