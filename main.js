document.addEventListener("DOMContentLoaded", function() {
  let submit = document.getElementById("generate");
  let downBut = document.getElementById("down");


  if (submit) {
    submit.addEventListener("click", function(e) {
      generateQRCode(e);
    });
  }

  if (downBut) {
    downBut.addEventListener("click", function(e) {
      downloadQRCode(e);
    });
  }
});

function generateQRCode(e) {
  e.preventDefault();
  let url = document.getElementById("inputUrl").value;
  if (url == "") {
    //console.log("Please enter a URL !");
    alert("Please enter a URL !");
    
  } else {
    console.log("POST - " + url);
    // Make a POST request to the backend
    qrGenerator(url);
  }
}

function qrGenerator(url){
  fetch('https://get-qr-a74o.onrender.com/getUrlQR', { //change with backend url
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // alert("QR code generated successfully");
    location.replace("https://atharv-28.github.io/get-QR/QR.html") // change with frontend url
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("An error occurred, please try again");
  });
}

