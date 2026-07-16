// ===== Constants =====

const today = new Date();
const oneDay = 1000 * 60 * 60 * 24;

// ===== Course Data =====

const courseNames = [
    "HTML Basics",
    "CSS Fundamentals",
    "JavaScript Basics"
];

const courseStatus = [
    "Open",
    "Coming Soon",
    "Closed"
];

const launchDates = [
    "2026-08-01",
    "2026-09-10",
    "2026-06-20"
];

// ===== Functions =====

function calculateDaysLeft(date) {

    const launchDate = new Date(date);

    launchDate.setHours(0, 0, 0, 0);

    const currentDate = new Date(today);

    currentDate.setHours(0, 0, 0, 0);

    const difference = launchDate - currentDate;

    return Math.floor(difference / oneDay);

}

function getLaunchLabel(daysLeft) {

    if (daysLeft > 0) {

        return daysLeft + " days left";

    } else if (daysLeft === 0) {

        return "Launching Today";

    } else {

        return "Already Launched";

    }

}

function filterByStatus(status) {

    const result = [];

    for (let i = 0; i < courseStatus.length; i++) {

        if (courseStatus[i] === status) {

            result.push(courseNames[i]);

        }

    }

    return result;

}

// ===== All Courses =====

console.log("===== All Courses =====");

for (let i = 0; i < courseNames.length; i++) {

    const daysLeft = calculateDaysLeft(launchDates[i]);

    const label = getLaunchLabel(daysLeft);

    console.log(
        (i + 1) +
        ". " +
        courseNames[i] +
        " | " +
        courseStatus[i] +
        " | " +
        label
    );

}

// ===== Open Courses =====

console.log("===== Open Courses =====");

const openCourses = filterByStatus("Open");

for (let i = 0; i < openCourses.length; i++) {

    console.log(openCourses[i]);

}

// ===== Upcoming Courses =====

console.log("===== Upcoming Courses =====");

for (let i = 0; i < courseNames.length; i++) {

    const daysLeft = calculateDaysLeft(launchDates[i]);

    if (daysLeft > 0) {

        console.log(courseNames[i] + " - " + daysLeft + " days left");

    }

}