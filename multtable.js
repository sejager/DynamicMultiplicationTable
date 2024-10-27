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

    // Get the old table and replace it
    var tblold = document.getElementById("tbl");
    tblold.parentElement.removeChild(tblold);
    const tbl = document.createElement("table");
    tbl.setAttribute("id", "tbl");
    const tblBody = document.createElement("tbody");

    var row, cell, cellText;
    
    // Create the table
    for (let i = minrow - 1; i <= maxrow; i++) {
        row = document.createElement("tr");
        for (let j = mincol - 1; j <= maxcol; j++) {
        cell = document.createElement("td");
        if (i == minrow - 1) {
            if (j == mincol - 1) {
                cellText = document.createTextNode("");
            } else {
                cellText = document.createTextNode(j)
            }
        } else if (j == mincol - 1) {
            cellText = document.createTextNode(i)
        } else {
            cellText = document.createTextNode(i * j);
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
    
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    }


var btn = document.getElementById("subbtn");
btn.addEventListener("click", () => {
    tableCreate();
})

