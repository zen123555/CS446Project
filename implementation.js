const realFileBtn1 = document.getElementById("realFile1");
const customBtn1 = document.getElementById("customButton1");
const customText1 = document.getElementById("textBtn1");

customBtn1.addEventListener("click", function () {
    realFileBtn1.click();
});

realFileBtn1.addEventListener("change", function() {
    if(realFileBtn1.value) {
        customText1.innerHTML = "File Uploaded Successfully!";
    } else {
        customText1.innerHTML = "File Upload Failed";
    }
});

const realFileBtn2 = document.getElementById("realFile2");
const customBtn2 = document.getElementById("customButton2");
const customText2 = document.getElementById("textBtn2");

customBtn2.addEventListener("click", function () {
    realFileBtn2.click();
});

realFileBtn2.addEventListener("change", function() {
    if(realFileBtn2.value) {
        customText2.innerHTML = "File Uploaded Successfully!";
    } else {
        customText2.innerHTML = "File Upload Failed";
    }
});

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

