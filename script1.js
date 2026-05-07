
// DARK MODE
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            darkBtn.innerHTML = "☀";
        }

        else{
            darkBtn.innerHTML = "🌙";
        }

    });

}


// SCROLL PROGRESS BAR
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }
});

// REVEAL ANIMATION
const revealItems = document.querySelectorAll(".reveal");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    revealItems.forEach((item) => {

        const itemTop =
            item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

// QUOTE CHANGER

const quotes = [
    "Travel is the best therapy.",
    "Adventure awaits you.",
    "Explore the world fearlessly.",
    "Collect moments not things.",
    "Life begins at the end of comfort zone."
];

const quoteText = document.getElementById("quote");

let quoteIndex = 0;

if (quoteText) {

    setInterval(() => {

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }

        quoteText.innerText = quotes[quoteIndex];

    }, 2000);

}



// FAVOURITE BUTTON


const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("fav-active");

        if (btn.classList.contains("fav-active")) {
            btn.innerHTML = "❤️ Added";
        } else {
            btn.innerHTML = "🤍 Favourite";
        }

    });

});

// BACK TO TOP BUTTON FIX

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        }
        else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// COUNTER ANIMATION
const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});

// SEARCH FILTER
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cardx");

        cards.forEach((card) => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// BOOKING POPUP
const bookingForm = document.querySelector(".booking-form");
const popup = document.getElementById("popup");

if (bookingForm && popup) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        popup.classList.add("popup-show");

        setTimeout(() => {
            popup.classList.remove("popup-show");
        }, 3000);
    });
}


// TRIP COST ESTIMATION
const destination = document.getElementById("destination");
const travelers = document.getElementById("travelers");
const days = document.getElementById("days");
const result = document.getElementById("result");

function calculateTrip() {

    let base = 50000;

    if(destination.value === "Paris") base = 120000;
    if(destination.value === "Bali") base = 90000;
    if(destination.value === "Maldives") base = 150000;
    if(destination.value === "Spain") base = 110000;
    if(destination.value === "Switzerland") base = 180000;

    let total =
    (base * travelers.value) +
    (days.value * 5000);

    result.innerHTML =
    `Estimated Trip Cost: ₹${total}`;
}

if(destination && travelers && days && result){

    destination.onchange = calculateTrip;
    travelers.oninput = calculateTrip;
    days.oninput = calculateTrip;

}


