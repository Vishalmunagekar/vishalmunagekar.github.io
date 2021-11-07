let url = "";
url = window.location.href;
if(url.endsWith("/")){
    document.getElementById("home").classList.add('active');
} else if(url.endsWith("profile.html")) {
    updateVisitorCount();
    document.getElementById("blog").classList.add('active');
}

function sendEmail() { window.location.assign("mailto:vishalmunagekar@gmail.com"); }

const count = document.getElementById('count');

getVisitorCount();

function updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/vishal-munagekar/github.io/?amount=1')
        .then(res => res.json())
        .then(res => { count.innerHTML = res.value; });
}

function getVisitorCount() {
    fetch('https://api.countapi.xyz/get/vishal-munagekar/github.io')
        .then(res => res.json())
        .then(res => { count.innerHTML = res.value; });
}

// var option = {
//     animation : true,
//     autohide : true,
//     delay : 5000
// }
// $('.toast').toast({delay : 50000});
// $('.toast').toast('show');
