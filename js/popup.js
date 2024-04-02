function openPopup(cardId, price) {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    var confirmButton = document.getElementById("confirm-button");

    confirmButton.innerHTML = "<b>Confirm $" + price.toFixed(2) + "</b>";

    popup.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}
