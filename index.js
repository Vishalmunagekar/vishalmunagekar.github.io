let url = "";
url = window.location.href;
if(url.endsWith("index.html")){
    document.getElementById("home").classList.add('active');
} else if(url.endsWith("profile.html")) {
    document.getElementById("blog").classList.add('active');
} else if(url.endsWith("contact.html")) {
    document.getElementById("contact").classList.add('active');
}