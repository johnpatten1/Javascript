// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var filterbutton = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");

data.forEach(entry => {
    var tRow = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
        var tData = tRow.append("td");
        tData.text(value);
    });
});

// JAVASCRIPT FOR THE OTHER BUTTONS IS INCLUDED IN THE INDEX.HTML FILE AT THE VERY BOTTOM
// THIS IS AS FAR AS I COULD GET WITH THIS METHOD:

filterbutton.on("click", function() {
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(date => tableData.datetime === inputValue);
    console.log(filteredData)
});