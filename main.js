let output = document.getElementById("output");
output.style.visibility = "hidden";
let submit = document.getElementById("generate");
submit.addEventListener("click", function (e) {
  e.preventDefault();
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
        output.style.visibility = "visible";
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("An error occured, please try again");
        return true;
      });
  }
  return false;
});
