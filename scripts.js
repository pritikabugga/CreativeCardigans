// Cardigan data
const cardigans = {
    1: { image: "images/ClassicKnit.jpg", title: "Classic Knit", condition: "New", price: "$45", offers: "5" },
    2: { image: "images/ElegantWool.jpg", title: "Elegant Wool", condition: "New", price: "$55", offers: "8" },
    3: { image: "images/CasualComfort.jpg", title: "Casual Comfort", condition: "New", price: "$40", offers: "3" },
    4: { image: "images/EmbroideryWool.jpg", title: "Embroidery Wool", condition: "New", price: "$50", offers: "7" },
    5: { image: "images/CozyFleece.jpg", title: "Cozy Fleece", condition: "New", price: "$60", offers: "4" },
    6: { image: "images/ColorBlock.jpg", title: "Color Block", condition: "New", price: "$65", offers: "6" }
};

// Load item details based on URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (cardigans[id]) {
    document.getElementById("item-image").src = cardigans[id].image;
    document.getElementById("item-title").innerText = cardigans[id].title;
    document.getElementById("item-condition").innerText = cardigans[id].condition;
    document.getElementById("item-price").innerText = cardigans[id].price;
    document.getElementById("item-offers").innerText = cardigans[id].offers;
}
