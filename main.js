let submit = document.getElementById("generate");
let form = document.getElementById("formIinput");
let downBut = document.getElementById("down");

submit.addEventListener("click", function(e) {
  generateQRCode(e);
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
  fetch('http://127.0.0.1:5000/getUrlQR', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    location.replace("http://127.0.0.1:5500/QR.html")
    alert("QR code generated successfully");
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("An error occurred, please try again");
  });
}


