// ACTIVE NAVBAR
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add('active');
    }
});


// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

reveals.forEach(item => observer.observe(item));


// DARK MODE
const darkBtn = document.getElementById('darkBtn');

if(darkBtn){
    darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}


// SEARCH FILTER
const searchInput = document.getElementById('searchInput');

if(searchInput){
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();

        document.querySelectorAll('.cardx').forEach(card => {
            const text = card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display = 'block';
            }
            else{
                card.style.display = 'none';
            }
        });
    });
}


// BOOKING POPUP
const bookingForm = document.querySelector('.booking-form');
const popup = document.getElementById('popup');

if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
        e.preventDefault();

        popup.classList.add('popup-show');

        setTimeout(() => {
            popup.classList.remove('popup-show');
            bookingForm.reset();
        }, 2500);
    });
}


// TRIP COST CALCULATOR
const destination = document.getElementById('destination');
const budget = document.getElementById('budget');
const travelers = document.getElementById('travelers');
const result = document.getElementById('result');

function calculateCost(){

    if(!destination || !budget || !travelers || !result){
        return;
    }

    let base = 0;

    switch(destination.value){
        case 'Paris':
            base = 100000;
            break;

        case 'Spain':
            base = 90000;
            break;

        case 'Maldives':
            base = 120000;
            break;

        case 'Bali':
            base = 80000;
            break;

        case 'Switzerland':
            base = 150000;
            break;
    }

    if(budget.value === 'Medium Budget'){
        base += 40000;
    }

    if(budget.value === 'High Budget'){
        base += 80000;
    }

    const total = base * Number(travelers.value);

    result.innerHTML = `Estimated Trip Cost: ₹${total.toLocaleString()}`;
}

if(destination){
    destination.addEventListener('change', calculateCost);
    budget.addEventListener('change', calculateCost);
    travelers.addEventListener('input', calculateCost);
}


// COUNTER ANIMATION
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        }
        else{
            counter.innerText = target;
        }
    }

    updateCounter();
});


// SCROLL PROGRESS BAR
window.addEventListener('scroll', () => {

    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    const progressBar = document.getElementById('progressBar');

    if(progressBar){
        progressBar.style.width = progress + '%';
    }
});


// BACK TO TOP BUTTON
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    }
    else{
        topBtn.style.display = 'none';
    }
});

if(topBtn){
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}