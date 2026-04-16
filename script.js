function toggleMenu() {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".burger");
    const isOpen = menu.style.display === "flex";

    menu.style.display = isOpen ? "none" : "flex";

    if (button) {
        button.setAttribute("aria-expanded", String(!isOpen));
    }
}

document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
        const question = item.querySelector(".faq-question").textContent.toLowerCase();

        if (question.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});