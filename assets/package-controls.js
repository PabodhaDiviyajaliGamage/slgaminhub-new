// Handle quantity updates
function updateQuantity(button, change) {
    const container = button.closest('.quantity-control');
    const input = container.querySelector('.quantity-input');
    const card = button.closest('.package-card');
    const priceElement = card.querySelector('.package-price');
    const basePrice = parseFloat(card.getAttribute('data-price'));
    
    let value = parseInt(input.value) + change;
    
    // Ensure value is between 1 and 99
    value = Math.max(1, Math.min(99, value));
    input.value = value;
    
    // Update displayed price
    const totalPrice = (basePrice * value).toFixed(2);
    priceElement.textContent = `Rs.${totalPrice}`;

    // Update the hidden total price input if it exists
    const totalPriceInput = card.querySelector('.total-price-input');
    if (totalPriceInput) {
        totalPriceInput.value = totalPrice;
    }
}

// Update order modal with quantity
function updateOrderModal(packageName, basePrice, quantity) {
    const totalPrice = (parseFloat(basePrice) * quantity).toFixed(2);
    document.getElementById("selectedPackageName").textContent = `${packageName} × ${quantity}`;
    document.getElementById("selectedPackagePrice").textContent = `Rs.${totalPrice}`;
    document.getElementById("packageName").value = packageName;
    document.getElementById("packagePrice").value = totalPrice;
    document.getElementById("packageQuantity").value = quantity;
}