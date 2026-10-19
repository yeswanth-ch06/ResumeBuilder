// ==========================================================
// RESUME GENERATOR - BEGINNER JAVASCRIPT
// Straightforward, readable, and easy-to-learn JavaScript
// ==========================================================

// Helper function: Turns multiline text into an HTML bullet list <ul><li>...</li></ul>
function makeBulletListHTML(text) {
  if (!text || text.trim() === "") {
    return "";
  }

  var lines = text.split("\n");
  var html = "<ul>";

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line !== "") {
      // Remove any manual bullet characters if user typed them
      if (line.charAt(0) === "•" || line.charAt(0) === "-") {
        line = line.substring(1).trim();
      }

      // If the line has a category format like "Programming: Python, Java", make the category bold
      var colonIndex = line.indexOf(":");
      if (colonIndex > 0 && colonIndex < 35) {
        var category = line.substring(0, colonIndex);
        var rest = line.substring(colonIndex + 1);
        line = "<strong>" + category + ":</strong>" + rest;
      }

      html += "<li>" + line + "</li>";
    }
  }

  html += "</ul>";
  return html;
}

// Main function: Reads all input fields and updates the live resume preview
function updateResume() {
  // 1. Header Information
  var name = document.getElementById("input-name").value;
  var title = document.getElementById("input-title").value;
  var phone = document.getElementById("input-phone").value;
  var email = document.getElementById("input-email").value;
  var linkedin = document.getElementById("input-linkedin").value;

  document.getElementById("preview-name").innerText = name || "YOUR FULL NAME";
  document.getElementById("preview-title").innerText = title || "Professional Title / Headline";
  document.getElementById("preview-phone").innerText = phone || "Phone Number";
  document.getElementById("preview-email").innerText = email || "email@example.com";
  document.getElementById("preview-linkedin").innerText = linkedin || "www.linkedin.com/in/username";

  // 2. Career Objective
  var objective = document.getElementById("input-objective").value;
  document.getElementById("preview-objective").innerText =
    objective || "Write a brief professional summary or career objective outlining your skills, domain knowledge, and career goals.";

  // 3. Education
  var college = document.getElementById("input-college").value;
  var degree = document.getElementById("input-degree").value;
  document.getElementById("preview-college").innerText = college || "University / College Name (Year - Year)";
  document.getElementById("preview-degree").innerText = degree || "Degree, Specialization / Major — CGPA / Score";

  // 4. Technical Skills
  var skillsText = document.getElementById("input-skills").value;
  if (skillsText.trim() !== "") {
    document.getElementById("preview-skills").innerHTML = makeBulletListHTML(skillsText);
  } else {
    // Generic placeholder skills
    document.getElementById("preview-skills").innerHTML =
      "<ul>" +
      "<li><strong>Category 1:</strong> Skill A, Skill B, Skill C</li>" +
      "<li><strong>Category 2:</strong> Skill D, Skill E, Skill F</li>" +
      "</ul>";
  }

  // 5. Experience (Item 1 & Item 2)
  var exp1Title = document.getElementById("input-exp1-title").value;
  var exp1Points = document.getElementById("input-exp1-points").value;
  var exp2Title = document.getElementById("input-exp2-title").value;
  var exp2Points = document.getElementById("input-exp2-points").value;

  var expHTML = "";
  if (exp1Title.trim() !== "" || exp1Points.trim() !== "") {
    expHTML += '<div class="res-entry">';
    if (exp1Title.trim() !== "") {
      expHTML += '<div class="res-entry-title">' + exp1Title + '</div>';
    }
    expHTML += makeBulletListHTML(exp1Points);
    expHTML += '</div>';
  }

  if (exp2Title.trim() !== "" || exp2Points.trim() !== "") {
    expHTML += '<div class="res-entry">';
    if (exp2Title.trim() !== "") {
      expHTML += '<div class="res-entry-title">' + exp2Title + '</div>';
    }
    expHTML += makeBulletListHTML(exp2Points);
    expHTML += '</div>';
  }

  // If no experience entered yet, show a clean generic template entry
  if (expHTML === "") {
    expHTML =
      '<div class="res-entry">' +
      '<div class="res-entry-title">Role Title, Company Name (Duration)</div>' +
      '<ul>' +
      '<li>Key responsibility, duty, or core project contribution.</li>' +
      '<li>Key achievement, efficiency improvement, or skill developed.</li>' +
      '</ul>' +
      '</div>';
  }
  document.getElementById("preview-experience").innerHTML = expHTML;

  // 6. Projects (Projects 1, 2, and 3)
  var proj1Title = document.getElementById("input-proj1-title").value;
  var proj1Points = document.getElementById("input-proj1-points").value;
  var proj2Title = document.getElementById("input-proj2-title").value;
  var proj2Points = document.getElementById("input-proj2-points").value;
  var proj3Title = document.getElementById("input-proj3-title").value;
  var proj3Points = document.getElementById("input-proj3-points").value;

  var projHTML = "";
  if (proj1Title.trim() !== "" || proj1Points.trim() !== "") {
    projHTML += '<div class="res-entry">';
    if (proj1Title.trim() !== "") {
      projHTML += '<div class="res-entry-title">' + proj1Title + '</div>';
    }
    projHTML += makeBulletListHTML(proj1Points);
    projHTML += '</div>';
  }

  if (proj2Title.trim() !== "" || proj2Points.trim() !== "") {
    projHTML += '<div class="res-entry">';
    if (proj2Title.trim() !== "") {
      projHTML += '<div class="res-entry-title">' + proj2Title + '</div>';
    }
    projHTML += makeBulletListHTML(proj2Points);
    projHTML += '</div>';
  }

  if (proj3Title.trim() !== "" || proj3Points.trim() !== "") {
    projHTML += '<div class="res-entry">';
    if (proj3Title.trim() !== "") {
      projHTML += '<div class="res-entry-title">' + proj3Title + '</div>';
    }
    projHTML += makeBulletListHTML(proj3Points);
    projHTML += '</div>';
  }

  // If no projects entered yet, show clean generic sample project
  if (projHTML === "") {
    projHTML =
      '<div class="res-entry">' +
      '<div class="res-entry-title">Project Name | projectlink.com</div>' +
      '<ul>' +
      '<li>Project overview, features built, and problems solved.</li>' +
      '<li>Backend: Tech Stack | Frontend: Tech Stack | Database: Tech Stack</li>' +
      '</ul>' +
      '</div>';
  }
  document.getElementById("preview-projects").innerHTML = projHTML;

  // 7. Certificates
  var certText = document.getElementById("input-certificates").value;
  if (certText.trim() !== "") {
    document.getElementById("preview-certificates").innerHTML = makeBulletListHTML(certText);
  } else {
    document.getElementById("preview-certificates").innerHTML =
      "<ul>" +
      "<li>Certificate Name – Issuing Organization</li>" +
      "</ul>";
  }

  // 8. Achievements
  var achieveText = document.getElementById("input-achievements").value;
  if (achieveText.trim() !== "") {
    document.getElementById("preview-achievements").innerHTML = makeBulletListHTML(achieveText);
  } else {
    document.getElementById("preview-achievements").innerHTML =
      "<ul>" +
      "<li>Achievement, award, or competition highlight</li>" +
      "</ul>";
  }
}

// Function to load generic sample data (generic template example)
function loadSampleData() {
  document.getElementById("input-name").value = "John Doe";
  document.getElementById("input-title").value = "Software Engineer";
  document.getElementById("input-phone").value = "+1 (555) 019-2834";
  document.getElementById("input-email").value = "john.doe@example.com";
  document.getElementById("input-linkedin").value = "www.linkedin.com/in/johndoe";

  document.getElementById("input-objective").value =
    "Enthusiastic software engineer with a solid foundation in computer science and full-stack development. Eager to leverage technical skills in problem-solving and software design to contribute to innovative software solutions.";

  document.getElementById("input-college").value =
    "State University of Technology (2020 - 2024)";
  document.getElementById("input-degree").value =
    "Bachelor of Science in Computer Science and Engineering — 3.8 / 4.0 GPA";

  document.getElementById("input-skills").value =
    "Programming: Python, Java, C++, JavaScript, HTML/CSS\n" +
    "Databases: MySQL, PostgreSQL, MongoDB\n" +
    "Tools & Platforms: Git, GitHub, Docker, Amazon Web Services\n" +
    "Core Competencies: Data Structures & Algorithms, REST APIs, System Design";

  document.getElementById("input-exp1-title").value =
    "Software Engineering Intern, Tech Solutions Inc. (Jun 2023 - Aug 2023)";
  document.getElementById("input-exp1-points").value =
    "Assisted in developing client-facing web applications using JavaScript and modern web standards.\n" +
    "Optimized SQL database queries, improving data retrieval speed by 25%.\n" +
    "Collaborated with senior engineers in code reviews and agile sprint planning.";

  document.getElementById("input-exp2-title").value =
    "Web Development Intern, Innovate Labs (Jan 2023 - May 2023)";
  document.getElementById("input-exp2-points").value =
    "Designed and deployed reusable UI components for company internal tools.\n" +
    "Automated build tasks and streamlined team documentation on GitHub.";

  document.getElementById("input-proj1-title").value =
    "Task Tracker Application | github.com/user/task-tracker";
  document.getElementById("input-proj1-points").value =
    "Developed a full-stack task management application with user authentication and real-time alerts.\n" +
    "Backend: Node.js, Express | Frontend: HTML, CSS, JavaScript | Database: PostgreSQL";

  document.getElementById("input-proj2-title").value =
    "E-Commerce Product Portal | github.com/user/e-shop";
  document.getElementById("input-proj2-points").value =
    "Built a responsive storefront with product search, filtering, and mock checkout.\n" +
    "Backend: Python (Flask) | Frontend: HTML, CSS | Database: SQLite";

  document.getElementById("input-proj3-title").value = "";
  document.getElementById("input-proj3-points").value = "";

  document.getElementById("input-certificates").value =
    "Full-Stack Web Development Certificate – Open University\n" +
    "AWS Certified Cloud Practitioner – Amazon Web Services\n" +
    "Python for Data Science – Learning Academy";

  document.getElementById("input-achievements").value =
    "Solved 300+ algorithm challenges on LeetCode\n" +
    "Finalist in Regional University Hackathon 2023\n" +
    "Dean's Honor List for Academic Excellence (2021, 2022, 2023)";

  // Refresh preview
  updateResume();
}

// Function to clear all fields in the form
function clearForm() {
  var inputs = document.querySelectorAll(".form-container input, .form-container textarea");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  updateResume();
}

// Function to print or save the resume as PDF
function printResume() {
  window.print();
}

// When page loads, initialize with clean empty form and generic guide placeholders
window.onload = function() {
  clearForm();
};
