// import { DataTypes } from "sequelize/types";

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
    // $("#dailyTrackerBar").attr("style", )

    // water tracker bar
    // $("#waterTrackerBar").attr("style", )
    // $("#waterTrackerBar").attr()


    //set var for today's date
    let todaysDate = moment().format('YYYY-MM-DD');

    //***********PLEASE UPDATE ************/
    //update the VALUES below so that they collect the value when the toggle button changes state (true/false/amount)
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
    

