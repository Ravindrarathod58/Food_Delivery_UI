function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const endGroup = document.getElementById("navEndGroup");
  const nav = document.querySelector("nav");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.appendChild(endGroup);
    endGroup.classList.add("mobile-show");
  } else {
    const nav = document.querySelector("nav");
    nav.appendChild(endGroup);
    endGroup.classList.remove("mobile-show");
  }
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("navMenu");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const endGroup = document.getElementById("navEndGroup");
  const nav = document.querySelector("nav");

  if (
    menu.classList.contains("active") &&
    !menu.contains(event.target) &&
    !menuBtn.contains(event.target) &&
    !endGroup.contains(event.target)
  ) {
    menu.classList.remove("active");
    nav.appendChild(endGroup);
    endGroup.classList.remove("mobile-show");
  }
});

function filterCategory(element, category) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  element.classList.add("active");
  console.log("Filtering category:", category);
}
function searchRestaurants() {
  const pincode = document.getElementById("pincodeInput").value.trim();
  if (!pincode) {
    alert("Please enter a pincode");
    return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode");
    return;
  }
  alert(`Searching for restaurants in pincode: ${pincode}`);
}
document
  .getElementById("pincodeInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchRestaurants();
    }
  });
function changeLocation() {
  const newLocation = prompt("Enter your area/locality:", "Banjara Hills");
  if (newLocation) {
    document.querySelector(".location-text").textContent = newLocation;
  }
}
function viewCart() {
  alert("Cart: 23 items, Total: ₹1,249");
}
function login() {
  alert("Login/Signup functionality coming soon!");
}

const featuredRestaurants = [
  {
    name: "Biryani House Jubilee Hills",
    label: "Restaurant",
    discount: "-40%",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop",
  },
  {
    name: "Grand Bawarchi Cafe, Hyderabad",
    label: "Restaurant",
    discount: "-20%",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
  },
  {
    name: "Butterbrot Bakery and Cafe",
    label: "Restaurant",
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
  },
];

const categories = [
  {
    name: "Burgers & Fast food",
    count: "21 Restaurants",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    name: "Salads",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  },
  {
    name: "Pasta & Casuals",
    count: "4 Restaurants",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
  },
  {
    name: "Pizza",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  },
  {
    name: "Breakfast",
    count: "4 Restaurants",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
  },
  {
    name: "Soups",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },
];

const popularBrands = [
  { name: "McDonald's (Delhi)", logo: "Burgers" },
  { name: "Domino's Pizza (Mumbai)", logo: "Pizza" },
  { name: "KFC (Kolkata)", logo: "Fried Chicken" },
  { name: "Starbucks Coffee", logo: "Coffee" },
  { name: "Burger King (Pune)", logo: "BK" },
  { name: "Haldiram's", logo: "Sweets" },
];

const imageFallback =
  "https://via.placeholder.com/300x250/E0E0E0/6C757D?text=Image+Unavailable";

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (featuredRestaurants.length === 0) {
    grid.innerHTML = `<div class="empty-state"><h3>No Featured Deals available right now. 😔</h3></div>`;
    return;
  }
  grid.innerHTML = featuredRestaurants
    .map(
      (restaurant) => `
                <div class="restaurant-card">
                    <img 
                        src="${restaurant.image}" 
                        alt="Image of ${restaurant.name} special meal"
                        onerror="this.onerror=null; this.src='${imageFallback}';"
                    >
                    <div class="discount-badge">${restaurant.discount}</div>
                    <div class="restaurant-info">
                        <div class="restaurant-label">${restaurant.label}</div>
                        <div class="restaurant-name">${restaurant.name}</div>
                    </div>
                </div>
            `
    )
    .join("");
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (categories.length === 0) {
    grid.innerHTML = `<div class="empty-state"><h3>No Categories found. 😢</h3></div>`;
    return;
  }
  grid.innerHTML = categories
    .map(
      (category) => `
                <div class="category-card">
                    <img 
                        src="${category.image}" 
                        alt="Image for ${category.name} category" 
                        class="category-image"
                        onerror="this.onerror=null; this.src='${imageFallback}';"
                    >
                    <div class="category-name">${category.name}</div>
                    <div class="category-count">${category.count}</div>
                </div>
            `
    )
    .join("");
}

function renderPopular() {
  const grid = document.getElementById("popularGrid");
  if (popularBrands.length === 0) {
    grid.innerHTML = `<div class="empty-state"><h3>No Popular Brands to display.</h3></div>`;
    return;
  }
  grid.innerHTML = popularBrands
    .map(
      (brand, index) => `
                <div class="brand-card">
                    <div class="brand-logo">${brand.logo}</div>
                    <div class="brand-name">${brand.name}</div>
                </div>
            `
    )
    .join("");
}

renderFeatured();
renderCategories();
renderPopular();
