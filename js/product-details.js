let currentProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));
console.log(currentProduct);

function goBack() {
    window.location.replace("../index.html");
}

let productElement = `
<!-- Start Of Hotel Details Section  -->
<div class="hotel-details-section">
        <div class="container px-0 pt-5">
            <div class="row">
                <div class="col-md-6 hotel-details-image">
                    <img src=${currentProduct.images[0]}
                        alt="hotel image">
                </div>
                <div class="col-md-6 hotel-details-text">
                    <h2>${currentProduct["hotel"]}</h2>
                    <div class="hotel-city-section d-flex align-items-center">
                        <i class="fa-solid fa-location-dot fa-2x"></i>
                        <p style="margin-bottom: 0;margin-left: 6px;">${currentProduct["city"]}</p>
                    </div>
                    <div class="hotel-rating-section">
                       ${`<i class="fa-solid fa-star"></i>`.repeat(currentProduct.starRating)}
                       ${`<i class="fa-solid fa-star" style="color:grey;"></i>`.repeat(5 - currentProduct.starRating)}
                        <p class="ps-2 mb-0">(${currentProduct.starRating} Stars Hotel)</p>
                    </div>
                    <div class="hotel-price-section">
                        <p>$${currentProduct["price"]}</p>
                        <p> per night</p>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Of Hotel Details Section  -->
     <!-- Start Of About Hotel Section  -->
    <div class="about-hotel-section">
        <div class="container">
            <h3>About this hotel</h3>
            <p>${currentProduct["description"]}.</p>
        </div>
    </div>
    <!-- End Of About Hotel Section  -->
     <!-- Start Of Amenities -->
    <div class="amenities">
        <div class="container">
        ${currentProduct.amenities.map((e) => `
    <div class="amenity">
        ${e.icon}
        <p> ${e.name}</p>
    </div>
`).join('')}
        </div>
    </div>
    <!-- End Of Amenities -->
    <!-- Start Of Photo Gallery -->
    <div class="photo-gallery">
        <div class="container">
            <h3>Photo Gallery</h3>
            <div class="photos">
                ${currentProduct.images.map((e) =>
    `<div class="photo">
                    <img src="${e}"
                        alt="hotel-photo">
                </div>`
).join('')}
            </div>
        </div>
    </div>
    <!-- End Of Photo Gallery -->
    <!-- Start Of Footer -->
    <footer>
        <div class="container">
            <h3>Ready to Book Your Stay?</h3>
            <h4>Experience exceptional hospitality at Ocean View Resort</h4>
            <button>Book now - $${currentProduct.price}/night</button>

        </div>
    </footer>
    <!-- End Of Footer -->
`;
document.body.innerHTML += productElement;