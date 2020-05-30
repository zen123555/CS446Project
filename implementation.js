/*fills in the progress bar relative to the value passed into this function 
  Values scale: 0 (bar appears to be at 0%) - 70 (bar appears to be at 100%).  
*/
function updateProgress(barIncrease) {
  var pBar = document.getElementById('p');
  pBar.value += barIncrease;
  pBar.getElementsByTagName('span')[0].innerHTML = Math.floor((100 / 70) * pBvar.value);
}

/*checks that user entered valid input into the forms*/
function validateForm() {
  var name = document.forms["credentials"]["cName"].value;
  var password = document.forms["credentials"]["password"].value;
  if (name == "") {
    alert("Please enter a valid faculty ID login");
    return false;
  }
  else if(password == "") {
  	alert("Please enter a valid password associated with your faculty login credentials");
  	return false;
  }
} 


