function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";
    } else if (product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  // Highlight active button
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`.filter-buttons button[onclick="filterProducts('${category}')"]`);
  if (activeBtn) activeBtn.classList.add("active");
}
