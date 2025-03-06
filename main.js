let output = document.getElementById("output");
output.style.visibility = "hidden";
let submit = document.getElementById("generate");
submit.addEventListener("click", function (e) {
  let url = document.getElementById("inputUrl").value;
  if (url === "") {
    alert("Please enter a URL !");
    return;
  }
  else{
    console.log("POST - "+url);
      // Make a POST request to the backend
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
        // Handle the response data here
        // For example, display the QR code in the output element
        // output.innerHTML = `<img src="${data.qr}" alt="QR Code">`;
        output.style.visibility = "visible";
        e.preventDefault();

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
