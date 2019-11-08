function postAnnouncement() {
    //Define lists and for loop requirements
    let gradeList = JSON.parse(localStorage.getItem("gradeList")),
        genderList = JSON.parse(localStorage.getItem("genderList")),
        clubList = JSON.parse(localStorage.getItem("clubList")),
        announcementList = JSON.parse(localStorage.getItem("announcementList")),
        timeList = JSON.parse(localStorage.getItem("timeList")),
        announcementView = "", iLen;
    // Add input data to list
    gradeList.push(document.getElementById("grade").value);
    genderList.push(document.getElementById("gender").value);
    clubList.push(document.getElementById("club").value);
    announcementList.push(document.getElementById("announcement").value);
    timeList.push(getTime());

    // Re-store to list
    localStorage.setItem("gradeList", JSON.stringify(gradeList));
    localStorage.setItem("genderList", JSON.stringify(genderList));
    localStorage.setItem("clubList", JSON.stringify(clubList));
    localStorage.setItem("announcementList", JSON.stringify(announcementList));
    localStorage.setItem("timeList", JSON.stringify(timeList));

    // Display that it worked
    alert("Announcement Sent!");


    // Show announcement in Teacher Announcement Viewer
    for (let i = 1; i < announcementList.length + 1; i++) {
        iLen = announcementList.length - i;
        announcementView +=
            timeList[iLen] + " " + "Sent to " + gradeList[iLen] + " " + genderList[iLen] +  " in " + clubList[iLen] +
            ": " + announcementList[iLen] + "<br>";
    }
    document.getElementById("teacher_view").innerHTML = announcementView;
}

function createClub() {
    let newClub = prompt("Please enter the name of your new club:");
    let club = document.getElementById("club");
    let option = document.createElement("option");
    let clubsList = JSON.parse(localStorage.getItem("clubsList"));

    if (newClub != null) {
        clubsList.push(newClub);
        localStorage.setItem("clubsList", JSON.stringify(clubsList));
        option.text = newClub;
        option.value = newClub;
        club.add(option);
    }
}

function editName() {
    // Ask for teachers name
    let newName = prompt("What is your name?");
    // Print the teacher's name
    if (newName != null) {
        document.getElementById("teacherName").innerHTML = "Hello, " + newName + "!";
    }
    // Store teacher's name to Local Storage
    localStorage.setItem("teacherName", newName)
}

function teacherStartUp() {
    let loadedName = localStorage.getItem("teacherName");
    // If a teacher's name has been created before, write the saved name on refresh
    if (loadedName != null) {
        document.getElementById("teacherName").innerHTML = "Hello, " + loadedName + "!";
    }
    // Create lists if not created already
    if (localStorage.getItem("gradeList") === null) {
        localStorage.setItem("gradeList", "[]");
        localStorage.setItem("genderList", "[]");
        localStorage.setItem("clubList", "[]");
        localStorage.setItem("announcementList", "[]");
        localStorage.setItem("timeList", "[]");
    } if (localStorage.getItem("clubsList") === null) {
        localStorage.setItem("clubsList", "[]");
    }
    // Custom Clubs
    let x = document.getElementById("club"),
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

function getTime() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let wMonth;

    if (month === 0) {wMonth = "Jan"}
    else if (month === 1) {wMonth = "Feb"}
    else if (month === 2) {wMonth = "Mar"}
    else if (month === 3) {wMonth = "Apr"}
    else if (month === 4) {wMonth = "May"}
    else if (month === 5) {wMonth = "Jun"}
    else if (month === 6) {wMonth = "Jul"}
    else if (month === 7) {wMonth = "Aug"}
    else if (month === 8) {wMonth = "Sep"}
    else if (month === 9) {wMonth = "Oct"}
    else if (month === 10) {wMonth = "Nov"}
    else if (month === 11) {wMonth = "Dec"}
    // January 1, 2019 - 12:00 AM
    let apm;

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (hour < 12) {
        if (hour === 0) {hour = 12}
        apm = "AM";
    } else {
        apm = "PM";
        if (hour === 0) {hour = 12}
        else {hour -= 12}
    }
    return wMonth + " " + date + ", " + year + " - " + hour + ":" + minute + " " + apm;
}