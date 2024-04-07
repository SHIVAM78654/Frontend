// document.addEventListener('DOMContentLoaded', function() {
//     // Array of names
//     const names = ['rohit', 'karan', 'mohit', 'ankur'];

//     // Function to change the name
//     function changeName() {
//         const nameElement = document.querySelector('.name');
//         const randomIndex = Math.floor(Math.random() * names.length); // Generate a random index
//         nameElement.textContent = names[randomIndex]; // Set random name to the element
//     }

//     // Change name initially
//     changeName();

//     // Change name every second
//     setInterval(changeName, 1000);
// });
var texts = ['A Pythonist', 'A Java Developer', 'A fast learner', 'A Data Scientist'];
var currentTextIndex = 0;
var i = 1;
var speed = 100; // Adjust typing speed as needed

function typeWriter() {
    if (i < texts[currentTextIndex].length) {
        document.getElementById("type-rite").innerHTML += texts[currentTextIndex].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, speed); // After typing a text, erase it
    }
}

function eraseText() {
    if (i > 1) {
        var currentText = texts[currentTextIndex];
        document.getElementById("type-rite").innerHTML = currentText.substring(0, i);
        i--;
        setTimeout(eraseText, speed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
        setTimeout(typeWriter, speed);
    }
}

typeWriter();



// ==========skills=========

function scrollskill() {
    window.scrollBy({
        top: 3450,
        behavior: 'smooth'
    });
    // window.scrollBy(0, 0);
}
document.getElementById("skills").addEventListener("click", scrollskill);
// ===============about=============


function scrollabout() {
    window.scrollBy({
        top: -450,
        behavior: 'smooth'
    });
    // window.scrollBy(0, 0);
}
document.getElementById("aboutsection").addEventListener("click", scrollabout);