import { DataTypes } from "sequelize/types";

console.log("#loveyoself")

// todayDate
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// toggle button boolean attribute change

// loop through row data 
    // for keys where val=1 .val(1)
    // ---- store key name as const keyToggledOn
    // ---- document.getElementById #"keyToggledOn" (make sure each button <input> has id corresponding to tableCol)
    // ---- .attr()

const queryUrlGET = "/" // * url that returns api data, not index page *
$.ajax({
    url: queryUrlGET,
    method: "GET"
}).then(function(tableData) {
    for (const index = 0; index < tableData.length; index++) {
        let keyToggledOn = "";
        if ( value === 1) {
            document.getElementById('#${keyToggledOn}').attr("checked","checked")
        }
    }
});

// inspirational quotes api call
$.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
}).then(function(quotesData) {
    console.log(quotesData)
    // return data to <div>
}); 


// "i dont do this" null value
// is this actually important? the user can just say no -- this matters more for analytics, which is not key in v1


// avatar image state change (size -- for now, 3 state changes: small, medium, large) --> ange