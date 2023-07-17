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

$('#success-alert').hide();
$('#error-alert').hide();
$('#myModal').modal('show');



document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (this.checkValidity()) {
    // Retrieve form data
    var formData = new FormData(event.target);

    // Send AJAX request
    fetch('https://formspree.io/f/xeqboqql', {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        // Handle success response
        // Perform any additional actions or show success message
        console.log(response.status);
        if(response.status === 200 || response.status === 302)
            $("#success-alert").show();
        else
            $("#error-alert").show();
      })
      .catch(function (error) {
        // Handle error
        // Perform any error handling or show error message
        $("#error-alert").show();
      });
    $("#myModal").modal("hide");
  } else {
    // If the form is invalid, display an error message or perform any other necessary action
  }
});