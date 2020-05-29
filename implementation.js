function downloadResults() {

    // get the results pane from the DOM
    resultsPane = document.getElementById(results);

    // create an array each line of text inside the results pane
    resultsList = [];
    
    for (elem in resultsPane)
    {
        resultsList.append(elem.innerHTML);
    }

    // This part would be reserved for writing to a file

    // We will not be able to fake this part, as it is not possible
    // to access the file system from javascript
    // This is something that could be done in the back-end, using Django and Python scripts
    // https://www.thecrazyprogrammer.com/2019/12/javascript-read-and-write-to-text-file.html
}