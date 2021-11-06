let url = "";
url = window.location.href;
if(url.endsWith("/")){
    document.getElementById("home").classList.add('active');
} else if(url.endsWith("profile.html")) {
    document.getElementById("blog").classList.add('active');
}

function sendEmail() { window.location.assign("mailto:vishalmunagekar@gmail.com"); }