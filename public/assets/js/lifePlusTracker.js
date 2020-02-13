console.log("#loveyoself")

// todayDate
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// toggle button boolean attribute change
/* const queryUrlGET = // * url that returns api data, not index page *
$.ajax({
    url: queryUrlGET,
    method: "GET"
}).then(function(tableData) {
    for (const index = 0; index < tableData.length; index++) {
        
        
    }
}); */

// inspirational quotes api call
$.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
}).then(function(quotesData) {
    console.log(quotesData)
    // return data to <div>
}); 


// "i dont do this" null value
// is this actually important? 


// avatar image state change (size -- for now, 3 state changes: small, medium, large) --> ange