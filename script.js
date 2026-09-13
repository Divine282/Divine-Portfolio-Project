console.log("Portfolio website loaded successfully.");

const button = document.querySelector(".button");

button.addEventListener("click", function () {
    console.log("Portfolio interaction detected.");
});

const year = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `© ${year} Divine Omatey`;