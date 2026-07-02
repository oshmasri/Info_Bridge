const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".service-card");

/* SEARCH FUNCTION */
searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
});

/* CLICK → GUIDANCE PAGE */
cards.forEach(card => {
    card.addEventListener("click", () => {
        const serviceName = card.textContent.trim();
        window.location.href =
            `../guidance/guide.html?service=${encodeURIComponent(serviceName)}`;
    });
});
