function addEducation() {
    var educationSection = document.getElementById("education-section");
    var div = document.createElement("div");
    div.classList.add("education-entry");
    div.innerHTML = "\n        <input type=\"text\" placeholder=\"Degree, University, Year\" class=\"education-input\">\n        <button onclick=\"removeEntry(this)\">Remove</button>\n    ";
    educationSection.appendChild(div);
}
function addExperience() {
    var experienceSection = document.getElementById("experience-section");
    var div = document.createElement("div");
    div.classList.add("experience-entry");
    div.innerHTML = "\n        <input type=\"text\" placeholder=\"Job Title, Company, Duration\" class=\"experience-input\">\n        <button onclick=\"removeEntry(this)\">Remove</button>\n    ";
    experienceSection.appendChild(div);
}
function addSkill() {
    var skillsSection = document.getElementById("skills-section");
    var div = document.createElement("div");
    div.classList.add("skill-entry");
    div.innerHTML = "\n        <input type=\"text\" placeholder=\"Skill\" class=\"skill-input\">\n        <button onclick=\"removeEntry(this)\">Remove</button>\n    ";
    skillsSection.appendChild(div);
}
function removeEntry(button) {
    button.parentElement.remove();
}
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var educationInputs = document.querySelectorAll(".education-input");
    var educationList = Array.from(educationInputs).map(function (input) { return input.value; });
    var experienceInputs = document.querySelectorAll(".experience-input");
    var experienceList = Array.from(experienceInputs).map(function (input) { return input.value; });
    var skillsInputs = document.querySelectorAll(".skill-input");
    var skillsList = Array.from(skillsInputs).map(function (input) { return input.value; });
    document.getElementById("personal-info-output").innerHTML = "\n        <h3 contenteditable=\"true\">Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    ");
    document.getElementById("education-output").innerHTML = "\n        <h3>Education</h3>\n        <ul>".concat(educationList.map(function (item) { return "<li contenteditable=\"true\">".concat(item, "</li>"); }).join(''), "</ul>\n    ");
    document.getElementById("experience-output").innerHTML = "\n        <h3>Experience</h3>\n        <ul>".concat(experienceList.map(function (item) { return "<li contenteditable=\"true\">".concat(item, "</li>"); }).join(''), "</ul>\n    ");
    document.getElementById("skills-output").innerHTML = "\n        <h3>Skills</h3>\n        <ul>".concat(skillsList.map(function (item) { return "<li contenteditable=\"true\">".concat(item, "</li>"); }).join(''), "</ul>\n    ");
}
