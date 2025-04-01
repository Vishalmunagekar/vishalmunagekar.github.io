var firstDay = new Date("2020-06-22"); // Start date
var today = new Date();
var diffInMs = today - firstDay;
var yearsOfExp = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
document.getElementById("experience").textContent = yearsOfExp.toFixed(1);

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

async function updateCounter() {
    try {
        let response = await fetch('https://api.counterapi.dev/v1/:vishalmunagekar/:mycounter/up');
        let data = await response.json();
        document.getElementById('counter').innerText = data.count;
    } catch (error) {
        console.error("Error fetching counter:", error);
        document.getElementById('counter').innerText = "Error";
    }
}

async function getCounter() {
    try {
        let response = await fetch('https://api.counterapi.dev/v1/:vishalmunagekar/:mycounter');
        let data = await response.json();
        document.getElementById('counter').innerText = data.count;
    } catch (error) {
        console.error("Error fetching counter:", error);
        document.getElementById('counter').innerText = "Error";
    }
}

// Check if visitor has been here before
if (getCookie("visited_before")) {
    getCounter();  // Just fetch and display the count (Not showing now :( )
} else {
    updateCounter();  // Increment counter
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
    setCookie("visited_before", "true", 1);  // Set cookie for 1 day
}