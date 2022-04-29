// Inputs the width of the element
const gridWidthEl = document.getElementById("inputWidth");
// Inputs the height of the element
const gridHeightEl = document.getElementById("inputHeight");
// picks color of the element
const colorPickerEl = document.getElementById("colorPicker");
// Submits the element
const submitEl = document.getElementById("submitInput");
// Table element
const tableEl = document.getElementById("pixelCanvas");

// Adds an event listener to the submit Query input
// this helps to call the makeGrid method
submitEl.addEventListener('click', (e) => {
    // Helps to prevent the form from default actIon
    e.preventDefault();
    // gets rid of the previous element in the table element
    tableEl.replaceChildren("");
    // Call the makeGrid function
    makeGrid();
});

// calls the makeGrid() method Whenever user enters a size
function makeGrid() {
    // this Gets the width and height of the grid
    const widthOfGrid = gridWidthEl.value;
    const heightOfGrid = gridHeightEl.value;

    //this Constructs the grid
    for(let a = 0; a < heightOfGrid; a++) {
        // Creation of a table row element
        const tr = document.createElement('tr');
        // Addition of class name of container to the table row
        tr.classList.add('container');

        // For the individual squares
        for(let b = 0; b < widthOfGrid; b++) {
            // Creation of a table data element
            const td = document.createElement('td');
            // Addition of a class of square to table data
            td.classList.add('square');
            // Append the table data element to the table row element
            tr.appendChild(td);
        }
        // Add an event assignment to the table row
        tr.addEventListener(
            'click',
            function(e)
            {
                // Checks if class is contained in the target of the table row 
                // of square
                if(e.target.classList.contains('square')){
                    // If class is present, set the background color of the target
                    // to the value of the color picker element
                    e.target.style.backgroundColor = colorPickerEl.value;
                }
            });
        
        // Append table row to table element
        tableEl.appendChild(tr);
    }
    
}