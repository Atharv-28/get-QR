let output = document.getElementById("output");
output.style.visibility = "hidden";
let submit = document.getElementById("generate");
submit.addEventListener("click", function () {
  let url = document.getElementById("inputUrl").value;
  if (url === "") {
    alert("Please enter a URL !");
    return;
  }
  else{
    console.log(url);
    output.style.visibility = "visible";
  }
});
