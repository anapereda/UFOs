// import the data from data.js
const tableData = data;

//Reference the HTML table using d3; d3 is JS library
// that produces sophisticated and highly dynamic phaphics in HTML
var tbody = d3.select("tbody");

//Create ta table with UFOs sightseeing locations

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  //Keep track of all the filters
var filters = { };

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let changedElement = d3.select(this)
  let id= changedElement.attr("id")
  let value= changedElement.property("value")

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (value){
    filters[id]= value;
  }
  else {
    delete filters[id];
  }
  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

function filterTable(filters) {

  // Set the filteredData to the tableData
  let filteredData= tableData
  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value)
      }
    )

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}
// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

  