// import { DataTypes } from "sequelize/types";

// *** js connection check ***
console.log("#loveyoself")

// *** moment.js todayDate to return to page ***
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// *** return user input values and push to array as key/value pairs ***
const buttonValueArray = document.querySelectorAll(".userInput");
console.log(buttonValueArray);
const buttonData = [];
for (let index = 0; index < buttonValueArray.length; index++) {
    // get key data from button ids
    const btnKey = buttonValueArray[index].attributes.id.value
    console.log(btnKey);
    // get value data from button dataset
    const btnValue = buttonValueArray[index].dataset.status;
    console.log(btnValue);
    // create key value pair
    const btnKeyValue = btnKey + ": " + btnValue;
    // push key value pair to array
    buttonData.push(btnKeyValue);  
}
    // check it
    console.log(buttonData);

// *** submit button PUT click event ***  
$("#dailySubmitBtn").click(function() {
    // set var for today's date in SQL table format
    let todayDatePUTReq = moment().format('YYYY-MM-DD');

    //***********PLEASE UPDATE ************/
 
    let updateData = {
        water: true,
        waterAmount: 100,
        meditation: true,
        pills: true,
        interaction: true,
        goal: true,
        food: true
    }

    $.ajax("/api/progress/" + todayDatePUTReq, {
        type: "PUT",
        data: updateData

    }).then(function() {

        console.log("done");

    })

});    


// *** toggle button boolean attribute change ***
// ---- buttons array for loop 
const buttonStateArray = document.querySelectorAll(".toggleStateBtn");
buttonStateArray.forEach(function(index) {
    console.log(index);

    const dataStatusKey = index.getAttribute("data-status");
    console.log(dataStatusKey);

    if (dataStatusKey === "true") {
        console.log("returning toggles!");
        $('input[type="checkbox" data-status="true"]').attr("checked", "checked");
    } else if (dataStatusKey === "false") {
        console.log("returning nada :( )");
        $('input[type="checkbox" data-status="false"]').attr("checked", "null");
    }
});

// *** inspirational quotes api call ***
$.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
}).then(function(quotesDataRaw) {
    // console.log(quotesDataRaw);
    const quotesDataParsed = JSON.parse(quotesDataRaw);
    // console.log(quotesDataParsed);
    const randomIndex = Math.floor(Math.random() * 101)
    console.log(randomIndex);
    // console.log(quotesDataParsed[randomIndex]);
    const quote = quotesDataParsed[randomIndex].text;
    console.log(quote);
    const author = quotesDataParsed[randomIndex].author;
    $("#quotesAPI").text(quote + author);
}); 



