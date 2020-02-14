// import { DataTypes } from "sequelize/types";

console.log("#loveyoself")

// todayDate
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// toggle button boolean attribute change
function toggleChange() {
    if ("#data-status" === "true") {
        $.attr("checked", "checked");
    }
};
toggleChange();


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
    console.log(quotesDataParsed[5]);

    const quote = quotesDataParsed[5].text;
    console.log(quote);
    const author = quotesDataParsed[5].author;
    $("#quotesAPI").text(quote + author);
}); 

// submit button click functions 
$("#dailySubmitBtn").click(function() {
    // daily tracker progress bar
    // $("#dailyTrackerBar").attr("style", )

    // water tracker bar
    // $("#waterTrackerBar").attr("style", )

    //set var for today's date
    let todaysDate = moment().format('YYYY-MM-DD');

    let updateData = {
        water: true,
        waterAmount: 100,
        meditation: true,
        pills: true,
        interaction: true,
        goal: true,
        food: true
    }

    $.ajax("/api/progress/" + todaysDate, {
        type: "PUT",
        data: updateData

    }).then(function() {

        console.log("done");

    })

    // to update the progress bar in percentages
    // let count = 0;
    // const toggleVal = 6;
    // let progressVal = count / toggleVal;

});
