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
if (reviewCard && starsElement && reviewTextElement && reviewAuthorElement) {
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


}

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;
if(music && musicToggle) {
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
}

const mealType = document.getElementById("mealType");
const reservationTime = document.getElementById("reservationTime");

if (mealType && reservationTime) {

    const timeOptions = {
        breakfast: ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
        lunch: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"],
        dinner: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]
    };

    mealType.addEventListener("change", function () {
        reservationTime.innerHTML = '<option value="">Select Time</option>';

        const selectedMeal = mealType.value;

        if (selectedMeal !== "") {
            timeOptions[selectedMeal].forEach(function (time) {
                const option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                reservationTime.appendChild(option);
            });
        }
    });

}
