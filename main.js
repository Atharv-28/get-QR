let output = document.getElementById("output");
let submit = document.getElementById("generate");
let form = document.getElementById("formIinput");

submit.addEventListener("click", function(e) {
  generateQRCode(e);
});


function generateQRCode(e) {
  e.preventDefault();
  let url = document.getElementById("inputUrl").value;
  if (url == "") {
    console.log("Please enter a URL !");
    // alert("Please enter a URL !");
    
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
    alert("QR code generated successfully");
    // output.style.visibility = "visible";
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("An error occurred, please try again");
  });
}
