function getAnnouncement() {
    // Get item stored into variables
    let teacherName = localStorage.getItem("teacherName"),
        gradeList = JSON.parse(localStorage.getItem("gradeList")),
        genderList = JSON.parse(localStorage.getItem("genderList")),
        clubList = JSON.parse(localStorage.getItem("clubList")),
        announcementList = JSON.parse(localStorage.getItem("announcementList")),
        timeList = JSON.parse(localStorage.getItem("timeList")),
        studentGrade = localStorage.getItem("sGrade"),
        studentGender = localStorage.getItem("sGender"),
        studentClub = localStorage.getItem("sClub"),
        announcementView = "", iLen;

    for (let i = 1; i < announcementList.length + 1; i++) {
        iLen = announcementList.length - i;
        if (
            (gradeList[iLen] === studentGrade || gradeList[iLen] === "All Grades") &&
            (genderList[iLen] === studentGender || genderList[iLen] === "All Genders") &&
            (clubList[iLen] === studentClub || clubList[iLen] === "North Park Student")
        ) {
            announcementView +=
                timeList[iLen] + " " + "Sent by " + teacherName + " to " + gradeList[iLen] + " " + genderList[iLen]
                + " in " + clubList[iLen] + ": " + announcementList[iLen] + "<br>";
        }
    }

    if (announcementView.length === 0) {
        announcementView = "You have no new announcements. Please check back later!";
    }
    document.getElementById("announcementText").innerHTML = announcementView;
}

function submitStudentInfo() {
    // Get values stored into variables
    let sGrade = document.getElementById("student grade").value,
        sGender = document.getElementById("student gender").value,
        sClub = document.getElementById("student club").value;

    localStorage.setItem("sGrade", sGrade);
    localStorage.setItem("sGender", sGender);
    localStorage.setItem("sClub", sClub);
}

function showClubsStudent() {
    let x = document.getElementById("student club"),
        option = document.createElement("option"),
        clubsList = JSON.parse(localStorage.getItem("clubsList"));

    for (let i = 0; i < x.length + 1; i++){
        x.options[0] = null;
    }

    option.text = "North Park Student";
    option.value = "North Park Student";
    x.add(option);
    option = document.createElement("option");
    option.text = "IBT";
    option.value = "IBT";
    x.add(option);
    option = document.createElement("option");

    for (let i = 0; i < clubsList.length; i++) {
        option.text = clubsList[i];
        option.value = clubsList[i];
        x.add(option);
        option = document.createElement("option");
    }
}