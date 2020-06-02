function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadResults() {

    if (validateForm())
    {
        // get the results pane from the DOM
        resultsPane = document.getElementById("results").getElementsByClassName("pOutput");

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

    var pBar = document.getElementById('pBar');
    pBar.style.width = barIncrease;
    pBar.getElementsByTagName('span')[0].innerHTML = barIncrease;

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

    return true;

} 

function runPrototype() {
    if (validateForm()){
        addResults();
    } else {
        alert("Error running prototype: Check credentials and file upload types.");
    }
}

async function addResults(){
    resultsPane = document.getElementById("results");

        newPara = document.createElement("P");
        resultsPane.append(newPara);

        newPara.innerHTML = "Starting program";       
        updateProgress(10);
        await sleep(3000);

        newPara.innerHTML = "Running student audit"

        await sleep(2500);
        newPara.innerHTML = "Appending transcript for Jane Doe";
        updateProgress("10%");
        await sleep(1000);
        newPara.innerHTML += "<br>Appending transcript for John Doe";
        updateProgress("50%");
        await sleep(2000);

        newPara.innerHTML = "done<br>";
        await sleep(500);
        updateProgress("100%");

        newPara.innerHTML = `
        <p class="pOutput">Student: Jane Doe</p>
        <p class="pOutput">ID: 123456</p>
        <p class="pOutput">Certificate: Accomplishment</p>
        <p class="pOutput">Course 101</p>
        <p class="pOutput">Course 202</p>
        <p class="pOutput">Course 303</p><br>

        
        <p class="pOutput">Student: John Doe</p>
        <p class="pOutput">Certificate: Accomplishment</p>
        <p class="pOutput">Course 101</p>
        <p class="pOutput">Course 102</p>
        <p class="pOutput">Course 260</p>`;


}