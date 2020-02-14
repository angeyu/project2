// import { DataTypes } from "sequelize/types";

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

/* const queryUrlGET = "/" // * url that returns api data, not index page *
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
}); */

// inspirational quotes api call
$.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
}).then(function(quotesDataRaw) {
    // console.log(quotesDataRaw);
    const quotesDataParsed = JSON.parse(quotesDataRaw);
    console.log(quotesDataParsed);
    const quote = quotesDataParsed[0].array[1].text;
    console.log(quote);
    //const author = quotesDataParsed[index].author;
    //$("#quotesAPI").text(quote + author);
}); 

// submit button click functions 
// daily tracker progress bar
$("#dailySubmitBtn").click(function() {
    $("#dailyTrackerBar").attr
})
