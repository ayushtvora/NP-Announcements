// Name: Ayush Vora
// Course: ICS3U
// Version: 1.0.0
// Date: 21 November, 2019

// When the teacher pushes the login button...
function teacherButton() {
    let login = document.getElementById("login");
    // show the input box for the teacher access code
    login.removeAttribute("hidden");
}

// After the teachers submits the enter code.
function teacherSignUp() {
    let accessCode = document.getElementById("access").value;
    // If the teacher got the access code correct...
    if (accessCode === "teacher") {
        // Take them to the teacher page
        window.open("teacher/index.html");
    } else {
        alert("Incorrect Code. Please try again. If you are not sure, please contact the administrators.");
    }
}

// After the user pushes the student button, take them to the student page
function studentSignUp() {
    window.open("student/index.html");
}