// Get HTML Elements

const form = document.getElementById("resultForm");

const resultBox = document.getElementById("resultBox");

const resultDetails = document.getElementById("resultDetails");


// Form Submit Event

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get Student Information

    let name = document.getElementById("studentName").value.trim();

    let roll = document.getElementById("rollNumber").value.trim();


    // Get Subject Marks

    let math = Number(document.getElementById("math").value);

    let computer = Number(document.getElementById("computer").value);

    let physics = Number(document.getElementById("physics").value);

    let chemistry = Number(document.getElementById("chemistry").value);

    let english = Number(document.getElementById("english").value);


    // Store Marks

    let marks = [math, computer, physics, chemistry, english];


    // Validate Marks

    if (marks.some(mark => mark < 0 || mark > 100)) {

        alert("Please enter marks between 0 and 100!");

        return;

    }


    // Calculate Total

    let total = math + computer + physics + chemistry + english;


    // Calculate Percentage

    let percentage = total / 5;


    // Calculate Grade

    let grade;

    if (percentage >= 90) {
        grade = "A+ 🌟";
    }

    else if (percentage >= 80) {
        grade = "A 💜";
    }

    else if (percentage >= 70) {
        grade = "B 💗";
    }

    else if (percentage >= 60) {
        grade = "C 🌸";
    }

    else if (percentage >= 40) {
        grade = "D ✨";
    }

    else {
        grade = "F 💔";
    }


    // Calculate Pass or Fail

    let status = marks.every(mark => mark >= 33)
        ? "PASS 🎉"
        : "FAIL";


    // Display Result

    resultDetails.innerHTML = `

        <h3>💜 Student Result 💜</h3>

        <p><strong>Student Name:</strong> ${escapeHTML(name)}</p>

        <p><strong>Roll Number:</strong> ${escapeHTML(roll)}</p>

        <hr>

        <p>📚 Mathematics: ${math}</p>

        <p>💻 Computer Science: ${computer}</p>

        <p>⚛️ Physics: ${physics}</p>

        <p>🧪 Chemistry: ${chemistry}</p>

        <p>📖 English: ${english}</p>

        <hr>

        <h3>Total Marks: ${total} / 500</h3>

        <h3>Percentage: ${percentage.toFixed(2)}%</h3>

        <h3>Grade: ${grade}</h3>

        <h3>Result: ${status}</h3>

        <p>✨ Keep learning and keep shining! 💖</p>

    `;

    resultBox.scrollIntoView({
        behavior: "smooth"
    });

});


// Protect displayed student details from HTML injection

function escapeHTML(value) {

    return value.replace(/[&<>"']/g, function(character) {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}