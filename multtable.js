/*
File: multtable.js
Created by Sebastian Gyger
Part of HW3 for GUI I at UMass Lowell
This is a JavaScript file to make the dynamic multiplication table dynamic.
*/

function tableCreate() {
    // Get the values from the submission form to make a table
    var mincol = document.getElementById("mincol").value;
    var maxcol = document.getElementById("maxcol").value;
    var minrow = document.getElementById("minrow").value;
    var maxrow = document.getElementById("maxrow").value;

    // Create a new table container with all its contents
    // Remove an old one if it exists

    if (document.getElementById("tableContainer")) {
        var oldContainer = document.getElementById("tableContainer");
        oldContainer.parentElement.removeChild(oldContainer);
    }

    const tblCntnr = document.createElement("div");
    tblCntnr.setAttribute("id", "tableContainer");

    // Create a new table
    const tbl = document.createElement("table");
    tbl.setAttribute("id", "tbl");
    tbl.setAttribute("overflow", "scroll");

    const tblBody = document.createElement("tbody");

    var row, cell, cellText;
    
    // Create the table
    for (let i = minrow - 1; i <= maxrow; i++) {
        row = document.createElement("tr");
        for (let j = mincol - 1; j <= maxcol; j++) {
            if (i == minrow - 1) {
                cell = document.createElement("th");
                if (j == mincol - 1) {
                    cellText = document.createTextNode("");
                } else {
                    cellText = document.createTextNode(j)
                }
            } else if (j == mincol - 1) {
                cell = document.createElement("th");
                cellText = document.createTextNode(i)
            } else {
                cell = document.createElement("td");
                cellText = document.createTextNode(i * j);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);

    // Attach the newly created table onto the document
    document.body.appendChild(tblCntnr);
    document.getElementById("tableContainer").appendChild(tbl);
}

function validateForm() {
    var mincol = document.getElementById("mincol").value;
    var maxcol = document.getElementById("maxcol").value;
    var minrow = document.getElementById("minrow").value;
    var maxrow = document.getElementById("maxrow").value;

    if (mincol >= maxcol || minrow >= maxrow) {
        var msg = document.createTextNode("Minimum values must be lower than the maximum values.");
        document.body.appendChild.apply(msg);
    }
    else {
    }
}

var btn = document.getElementById("subbtn");
btn.addEventListener("click", () => {
    tableCreate();
})

