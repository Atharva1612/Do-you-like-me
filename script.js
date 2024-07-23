document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = "block";
        setTimeout(function() {
            popup.style.display = "none";
        }, 2000);  // Hides popup after 2 seconds
    }

    yesButton.addEventListener("click", function() {
        showPopup("Thanks for Accepting");
    });


    noButton.addEventListener("mouseenter", function() {
        const x = Math.random() * (window.innerWidth - 200); // Adjusted for button size
        const y = Math.random() * (window.innerHeight - 100); // Adjusted for button size
        noButton.style.position = "absolute";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    });
});
