// Data Base
const fruits = [
  {
    name: "Red Apple",
    price: "Rs. 250",
    category: "Premium",
    qty: "1 KG",
    img: "https://t4.ftcdn.net/jpg/03/10/32/03/360_F_310320316_xcQ2MHvAh9VtBndM6fxjZ7DGKdKpujei.jpg",
  },
  {
    name: "Banana",
    price: "Rs. 100",
    category: "Fresh",
    qty: "1 Dozen",
    img: "https://media.istockphoto.com/id/636739634/photo/banana.jpg?s=612x612&w=0&k=20&c=pO0985tQi1LpWRlWqpRvbab8S5yxgnEOVcs5CHIlcDE=",
  },
  {
    name: "Mango",
    price: "Rs. 300",
    category: "Seasonal",
    qty: "1 KG",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg",
  },
  {
    name: "Grapes",
    price: "Rs. 200",
    category: "Imported",
    qty: "500g",
    img: "https://t4.ftcdn.net/jpg/03/01/98/69/360_F_301986993_SYvMrcYECPje0HK6qRQQcm6uC7d3tpVC.jpg",
  },
  {
    name: "Orange",
    price: "Rs. 150",
    category: "Citrus",
    qty: "1 KG",
    img: "https://img.freepik.com/free-photo/fresh-orange-isolated-white-background_93675-131671.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Watermelon",
    price: "Rs. 400",
    category: "Summer",
    qty: "1 Unit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGGkkCSgN802KH3_irjwdYpIeFC6jDUtFMA&s",
  },
  {
    name: "Strawberry",
    price: "Rs. 500",
    category: "Berry",
    qty: "250g",
    img: "https://thumbs.dreamstime.com/b/three-strawberries-strawberry-leaf-white-background-114284301.jpg",
  },
  {
    name: "Pineapple",
    price: "Rs. 350",
    category: "Tropical",
    qty: "1 Unit",
    img: "https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-fresh-pineapple-png-png-image_11590302.png",
  },
  {
    name: "Lychee",
    price: "Rs. 300",
    category: "Tropical",
    qty: "1 Unit",
    img: "https://cdn.britannica.com/18/176518-050-5AB1E61D/lychee-fruits-Southeast-Asia.jpg",
  },
  {
    name: "Tamarillo	",
    price: "Rs. 200",
    category: "Tropical",
    qty: "1 Unit",
    img: "https://media.istockphoto.com/id/1957161038/photo/tamarillo-half-and-piece-close-up-on-a-white-isolated.jpg?s=612x612&w=0&k=20&c=MN_oVA9ZE6VNU1zxrMMYq0J33kTInu2yi4M1sBXStBo=",
  },
  {
    name: "Pomegranate",
    price: "Rs. 350",
    category: "Tropical",
    qty: "1 Unit",
    img: 'https://thumbs.dreamstime.com/b/juicy-pomegranate-its-half-leaves-16537522.jpg',
  },
  {
    name: "Raspberries",
    price: "Rs. 400",
    category: "Tropical",
    qty: "1 Unit",
    img: "https://www.melissas.com/cdn/shop/products/image-of-raspberries-fruit-14763647303724_600x600.jpg?v=1618238765",
  },
];

// 1. LOGIN LOGIC
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    // Data Save karna
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Redirect to Home
    window.location.href = "home.html";
  });
}

// 2. DISPLAY LOGIC (Home Page)
let cartItems = []; // Ye sabse upar hona chahiye

// 1. Purane displayFruits ko isse badal dein
function displayFruits(items) {
  const grid = document.getElementById("fruitGrid");
  if (!grid) return;

  grid.innerHTML = items
    .map(
      (fruit) => `
        <div class="fruit-card" onclick="openModal('${fruit.name}', '${fruit.img}', '${fruit.price}')">
            <div class="img-container">
                <img src="${fruit.img}" alt="${fruit.name}" class="fruit-img">
            </div>
            <span class="category-tag">${fruit.category}</span>
            <h3>${fruit.name}</h3>
            <p class="price">${fruit.price}</p>
            <p class="qty">Available: ${fruit.qty}</p>
        </div>
    `,
    )
    .join("");
}

// 2. Naya function: Screen (Modal) kholne ke liye
function openModal(name, img, price) {
  const modal = document.getElementById("productModal");
  const modalData = document.getElementById("modalData");

  modalData.innerHTML = `
        <img src="${img}" style="width:100%; max-height:200px; object-fit:contain; border-radius:15px;">
        <h2 style="margin: 20px 0 10px;">${name}</h2>
        <p style="font-size:24px; font-weight:800; color:var(--primary);">${price}</p>
        <div class="modal-actions">
            <button class="btn-buy" onclick="event.stopPropagation(); alert('Buying ${name}...')">Buy Now</button>
            <button class="btn-add" onclick="event.stopPropagation(); confirmAddToCart('${name}')">Add to Cart</button>
        </div>
    `;
  modal.style.display = "flex";
}

// 3. Modal band karne ke liye
function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// 4. Cart update karne ke liye
function confirmAddToCart(name) {
  cartItems.push(name);
  const counter = document.getElementById("cartCount");
  if (counter) {
    counter.innerText = cartItems.length;
  }
  closeModal(); // Item add hote hi screen band ho jaye
}

// Modal ke bahar click karne se band ho jaye (Extra touch)
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target == modal) {
    closeModal();
  }
};

// 3. SEARCH LOGIC
function searchFruits() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  const filtered = fruits.filter((f) => f.name.toLowerCase().includes(term));
  displayFruits(filtered);
}

// 4. ON LOAD
window.onload = () => {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  const nameEl = document.getElementById("displayUserName");
  const emailEl = document.getElementById("displayUserEmail");

  if (nameEl && name) nameEl.innerText = name;
  if (emailEl && email) emailEl.innerText = email;

  displayFruits(fruits);
};
