import { DataTypes } from "sequelize/types";

console.log("#loveyoself")

// todayDate
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// toggle button boolean attribute change
function toggleChange() {
    for (let i = 0; i < dataObj.length; index++) {
        if ([i] === "true") {
            $.setAttribute("checked", "checked");   
        } 
    }

    /* if ("#data-status" === "true") {
        $.setAttribute("checked", "checked");
    } */
};
toggleChange();

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
    $("#dailyTrackerBar").attr("style", )

    // water tracker bar
    $("#waterTrackerBar").attr()
})
