let reviewIndex = 0;

const reviews = [
    {
        stars: "★★★★★",
        text: "An unforgettable dining experience. The atmosphere, service, and food were all exceptional.",
        author: "— Google Review"
    },
    {
        stars: "★★★★★",
        text: "Beautiful setting, incredible food, and a premium experience from start to finish.",
        author: "— Google Review"
    },
    {
        stars: "★★★★★",
        text: "Perfect for a special evening. Everything felt elegant, relaxed, and carefully prepared.",
        author: "— Google Review"
    }
];

const reviewCard = document.querySelector(".review-text");
const starsElement = document.querySelector(".stars");
const reviewTextElement = document.querySelector(".review-text");
const reviewAuthorElement = document.querySelector(".review-card h3");

function updateReview(direction) {
    reviewCard.classList.add(direction === "next" ? "soft-left" : "soft-right");

    setTimeout(() => {
        if (direction === "next") {
            reviewIndex = (reviewIndex + 1) % reviews.length;
        } else {
            reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
        }

        starsElement.textContent = reviews[reviewIndex].stars;
        reviewTextElement.textContent = reviews[reviewIndex].text;
        reviewAuthorElement.textContent = reviews[reviewIndex].author;

        reviewCard.classList.remove("soft-left", "soft-right");
        reviewCard.classList.add("soft-enter");

        setTimeout(() => {
            reviewCard.classList.remove("soft-enter");
        }, 450);
    }, 350);
}

function nextReview() {
    updateReview("next");
}

function previousReview() {
    updateReview("previous");
}

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

musicToggle.addEventListener("click", () => {

    if (isPlaying === false) {

        music.play();

        musicToggle.innerHTML = "Ⅱ";

        isPlaying = true;

    }

    else {

        music.pause();

        music.currentTime = 0;

        musicToggle.innerHTML = "♪";

        isPlaying = false;

    }

});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});