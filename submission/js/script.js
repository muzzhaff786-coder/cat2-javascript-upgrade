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
