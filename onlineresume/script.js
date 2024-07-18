document.addEventListener('DOMContentLoaded', function() {
    var ab = document.getElementById("about");
    var exe_button = document.getElementById("Experience");
    var project_button = document.getElementById("projects");
    var skill_button = document.getElementById("skills");
    var education_button = document.getElementById("Education");
    var contact_button = document.getElementById("Contact"); // Corrected id

    var about = document.querySelector(".aboutsection");
    var experience = document.querySelector(".experience");
    var projects = document.querySelector(".projects");
    var skills = document.querySelector(".skills");
    var education = document.querySelector(".college");
    var contact = document.querySelector(".contact");

    // About Section
    function scrollAbout() {
        window.scrollTo({
            top: about.offsetTop,
            behavior: 'smooth'
        });
    }

    ab.addEventListener("click", scrollAbout);

    // Experience Section
    function scrollExperience() {
        window.scrollTo({
            top: experience.offsetTop,
            behavior: 'smooth'
        });
    }

    exe_button.addEventListener("click", scrollExperience);

    // Project Section
    function scrollProjects() {
        window.scrollTo({
            top: projects.offsetTop,
            behavior: 'smooth'
        });
    }

    project_button.addEventListener("click", scrollProjects);

    // Skills Section
    function scrollSkills() {
        window.scrollTo({
            top: skills.offsetTop,
            behavior: 'smooth'
        });
    }

    skill_button.addEventListener("click", scrollSkills);

    // Education Section
    function scrollEducation() {
        window.scrollTo({
            top: education.offsetTop,
            behavior: 'smooth'
        });
    }

    education_button.addEventListener("click", scrollEducation);

    // Contact Section
    function scrollContact() {
        window.scrollTo({
            top: contact.offsetTop,
            behavior: 'smooth'
        });
    }

    contact_button.addEventListener("click", scrollContact);

    // Typewriter Effect
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
});