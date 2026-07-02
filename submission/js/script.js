const testimonials = [
  { name: "Sarah Mohamed", quote: "The 1kg Blackforest cake was the best I've ever had. It was so freshly baked" },
  { name: "Johnson Peter", quote: "I love ordering the kunafa brownies." },
  { name: "Abdulmalik Bashir", quote: "I trusted them and they delivered their delicacies." }
];

const testimonialsList = document.querySelector("#testimonialsList");

testimonials.forEach(function(testimonial) {
    let li = document.createElement("li");
    let nameHeading = document.createElement("h5");
    nameHeading.textContent = testimonial.name;
    let quoteParagraph = document.createElement("p");
    quoteParagraph.textContent = testimonial.quote;
    li.appendChild(nameHeading);
    li.appendChild(quoteParagraph);
    testimonialsList.appendChild(li);
});

let bannerImage = document.querySelector("#bannerImage");
let bannerCaption = document.querySelector("#bannerCaption");

bannerImage.addEventListener("click", function () {
    bannerCaption.classList.toggle("show");
});

let orderInput = document.querySelector("#orderInput");
let addOrderButton = document.querySelector("#orderForm button");
let orderList = document.querySelector("#orderList");

function addOrderItem(treatName) {
    let li = document.createElement("li");
    let textSpan = document.createElement("span");
    let button = document.createElement("button");

    textSpan.textContent = treatName;
    button.textContent = "Delete";

    button.addEventListener("click", event => {
        li.remove();
        saveOrderToStorage();
    });

    li.appendChild(textSpan);
    li.appendChild(button);
    orderList.appendChild(li);
}

addOrderButton.addEventListener("click", event => {
    event.preventDefault();

    if (orderInput.value != "") {
        addOrderItem(orderInput.value);
        saveOrderToStorage();
        orderInput.value = "";
    } else {
        alert("Please type a treat name in the textbox");
    }
});

function saveOrderToStorage() {
    let items = document.querySelectorAll("#orderList li span");
    let itemNames = [];

    items.forEach(function (span) {
        itemNames.push(span.textContent);
    });

    localStorage.setItem("orderList", JSON.stringify(itemNames));
}

function loadOrderFromStorage() {
    let savedData = localStorage.getItem("orderList");

    if (savedData !== null) {
        let savedItems = JSON.parse(savedData);

        savedItems.forEach(function (treatName) {
            addOrderItem(treatName);
        });
    }
}

loadOrderFromStorage();