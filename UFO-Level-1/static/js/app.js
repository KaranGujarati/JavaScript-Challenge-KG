// STEP 1 - Assign the data from `data.js` to a descriptive variable
var tableData = data;

// STEP 2 - Function creation to display the data in table format under "tbody" in HTML

function tableDisplay(delusions) {

    var tbody = d3.select("tbody");

    delusions.forEach((record) => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};


// Clear the table for new data

function deleteTableData() {
    d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};


// STEP 3 - Events that happens after clicking the "Button"...

var button = d3.select("#filter-btn");

button.on("click", function() {

    //Prevent the page from refreshing...
    d3.event.preventDefault();

    //clearing old table data...
    deleteTableData();

    // Select the input element and it's values/OUTPUT...
    var inputValue = d3.select("#datetime").property("value");

    if (inputValue.trim() === "") {
        //display the whole database
        var filteredData = tableData;
    } else {
        //display the filtered data from Data.js
        var filteredData = tableData.filter(delusions => delusions.datetime === inputValue.trim());
    }

    // if no record found, then...
    if (filteredData.length == 0) {
        d3.select("tbody")
        .append("tr")
        .append("td")
        .attr("colspan", 7)
        .html("<h4> No Record Found </h4>");
    }

    console.log(filteredData);
    tableDisplay(filteredData);

});

// UFO sightings are delusional or fake! Reason? 
// -> Science has no evidence of any alien spacecraft, hence the name "Un-identiFied Object (UFO)"!!!. Also,
//    Human senses (eyes n ears) are the worst data taking devices ever. That is the reason we have highly advanced tech innovations
//    for data measurement (Example, Hubble telescope). 
// -> Plus, if any alien has the tech to visit this part of the solar system in this part of our milky way galaxy 
//    in this part of supercluster in this part of the UNIVERSE, they might not be so interested in us puny, level 0 civilization.
//    They might just annihilate us in a matter of seconds with their tech, if they cared to focus on us for a milisecond.
// -> Just trying to spread my knowledge on the matter i know and studied. Either "Sighting" people were delusional OR
//    just guessing the stuff they don't know OR they are after a cheap fame in their town.