let navHolder = document.querySelector(".nav-holder");




function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        navHolder.classList.add("scrolled")
        navHolder.style.position = "sticky"
    } else {
        navHolder.classList.remove("scrolled")

    }
}
window.onscroll = function() { scrollFunction() };

// function to toggle navbar
let menu = document.getElementById("menu");

function closemenu() {
    menu.style.top = "-100vh";
}

function openmenu() {
    menu.style.top = "0";
}
document.getElementById("open").addEventListener('click', () => {
    openmenu()
});
document.getElementById("close").addEventListener('click', () => {
    closemenu()
});
document.querySelector(".anchor").addEventListener('click', () => {
    closemenu()
});

//circular progress bar count up
let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let counter = 0;
setInterval(() => {
    if (counter === 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
        number2.innerHTML = counter + "%";
        number3.innerHTML = counter + "%";
        number4.innerHTML = counter + "%";
    }
}, 30)

const mydate = new Date().getFullYear();
let year = document.getElementById('year');
year.innerHTML += `${mydate}`