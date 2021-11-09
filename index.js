getVisitorCount();

function sendEmail() { window.location.assign("mailto:vishalmunagekar@gmail.com"); }

const count = document.getElementById('count');

let value = "";
value = localStorage.getItem('key');
if(value == null){
    value = Math.round((Math.random(1)) * 1000000);
    updateVisitorCount();
}

localStorage.setItem('key',value);

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