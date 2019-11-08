function teacherButton() {
    let login = document.getElementById("login");
    login.removeAttribute("hidden");
}

function teacherSignUp() {
    let accessCode = document.getElementById("access").value;
    if (accessCode === "teacher") {
        window.open("teacher/index.html");
        // location.href="teacher/index.html";
    } else {
        alert("Incorrect Code. Please try again. If you are not sure, please contact the administrators.");
    }
}

function studentSignUp() {
    location.href="student/index.html";
}