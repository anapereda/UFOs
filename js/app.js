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

  //if statements pseudocode practice 
  // if (a date is entered) {
	//Filter the default data to show only the date entered
//};

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
    
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  //Listen to an ecent that occurs on a webpage
  d3.selectAll("#filter- btn").on("click", handleClick);

  //call the original table so it loads when the first HTML does 
  buildTable(tableData);
  