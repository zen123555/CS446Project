function downloadResults() {

    if (validateForm())
    {
        // get the results pane from the DOM
        resultsPane = document.getElementById("results").getElementsByTagName("p");

        resultsStr = "";

        for (i = 0; i < resultsPane.length; i++)
        {
            resultsStr = resultsStr + resultsPane[i].innerHTML + "\n";
        }

        alert(resultsStr);
    }
    
    // This part would be reserved for writing to a file

    // We will not be able to fake this part, as it is not possible
    // to access the file system from javascript
    // This is something that could be done in the back-end, using Django and Python scripts
    // https://www.thecrazyprogrammer.com/2019/12/javascript-read-and-write-to-text-file.html
}

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

