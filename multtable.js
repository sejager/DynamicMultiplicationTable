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

    // Get rid of the old table or validation message if necessary.
    if (document.getElementById("tableContainer")) {
        var oldContainer = document.getElementById("tableContainer");
        oldContainer.parentElement.removeChild(oldContainer);
    }

    if (document.getElementById("validmsg")) {
        var oldMsg = document.getElementById("validmsg");
        oldMsg.parentElement.removeChild(oldMsg);
    }

    // Exit the function if the values aren't valid
    if (validateForm() == false)
        return 0;

    // Create a new table container with all its contents

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
    var mincol = Number(document.getElementById("mincol").value);
    var maxcol = Number(document.getElementById("maxcol").value);
    var minrow = Number(document.getElementById("minrow").value);
    var maxrow = Number(document.getElementById("maxrow").value);

    // Possible error cases, textContent explains each case
    if (mincol >= maxcol || minrow >= maxrow) {
        const msg = document.createElement("p");
        msg.setAttribute("id", "validmsg");
        msg.textContent = "The minimum values must be lower than the maximum values.";
        document.body.appendChild(msg);
        return false;
    }
    else if((maxrow - minrow) > 100 || (maxcol - mincol) > 100) {
        const msg = document.createElement("p");
        msg.setAttribute("id", "validmsg");
        msg.textContent = "The difference between the minimum and maximum values must not exceed 100.";
        document.body.appendChild(msg);
        return false;
    }
    else if (Math.abs(minrow) > 999 || Math.abs(maxrow) > 999 || Math.abs(mincol) > 999 || Math.abs(maxcol) > 999) {
        const msg = document.createElement("p");
        msg.setAttribute("id", "validmsg");
        msg.textContent = "The values must be numbers between -999 and 999.";
        document.body.appendChild(msg);
        return false;
    }

    // Good to go!
    else {
        return true;
    }
}


var btn = document.getElementById("subbtn");
btn.addEventListener("click", () => {
    tableCreate();
})