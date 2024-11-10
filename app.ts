function addEducation() {
    const educationSection = document.getElementById("education-section")!;
    const div = document.createElement("div");
    div.classList.add("education-entry");
    div.innerHTML = `
        <input type="text" placeholder="Degree, University, Year" class="education-input">
        <button onclick="removeEntry(this)">Remove</button>
    `;
    educationSection.appendChild(div);
}

function addExperience() {
    const experienceSection = document.getElementById("experience-section")!;
    const div = document.createElement("div");
    div.classList.add("experience-entry");
    div.innerHTML = `
        <input type="text" placeholder="Job Title, Company, Duration" class="experience-input">
        <button onclick="removeEntry(this)">Remove</button>
    `;
    experienceSection.appendChild(div);
}

function addSkill() {
    const skillsSection = document.getElementById("skills-section")!;
    const div = document.createElement("div");
    div.classList.add("skill-entry");
    div.innerHTML = `
        <input type="text" placeholder="Skill" class="skill-input">
        <button onclick="removeEntry(this)">Remove</button>
    `;
    skillsSection.appendChild(div);
}

function removeEntry(button: HTMLButtonElement) {
    button.parentElement!.remove();
}

function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    const educationInputs = document.querySelectorAll(".education-input") as NodeListOf<HTMLInputElement>;
    const educationList = Array.from(educationInputs).map(input => input.value);

    const experienceInputs = document.querySelectorAll(".experience-input") as NodeListOf<HTMLInputElement>;
    const experienceList = Array.from(experienceInputs).map(input => input.value);

    const skillsInputs = document.querySelectorAll(".skill-input") as NodeListOf<HTMLInputElement>;
    const skillsList = Array.from(skillsInputs).map(input => input.value);

    document.getElementById("personal-info-output")!.innerHTML = `
        <h3 contenteditable="true">Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
    `;

    document.getElementById("education-output")!.innerHTML = `
        <h3>Education</h3>
        <ul>${educationList.map(item => `<li contenteditable="true">${item}</li>`).join('')}</ul>
    `;

    document.getElementById("experience-output")!.innerHTML = `
        <h3>Experience</h3>
        <ul>${experienceList.map(item => `<li contenteditable="true">${item}</li>`).join('')}</ul>
    `;

    document.getElementById("skills-output")!.innerHTML = `
        <h3>Skills</h3>
        <ul>${skillsList.map(item => `<li contenteditable="true">${item}</li>`).join('')}</ul>
    `;
}
