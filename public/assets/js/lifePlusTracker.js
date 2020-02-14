// import { DataTypes } from "sequelize/types";

// *** js connection check ***
console.log("#loveyoself")

// *** moment.js todayDate to return to page ***
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// *** create api PUT request array before buttons ***
const apiPutArray = {};

// *** return all userInput vals to array ***
const buttonValueArray = document.querySelectorAll(".userInput");
console.log(buttonValueArray);

// *** click event function returning class .active to checked buttons" ***
function clickedYes() {
    $("#label").attr("class", "active");
    console.log("clickedYes() attr added successfully!");
}
// this function is called in the html as an onclick attribute

// function to return html data and create key value pairs of active state buttons and push them to api array
function activeState() {
    if ($("#label").hasClass("active")) {
        const activeBtnID = $("#label").data("id");
        console.log(activeBtnID);
    }
};
activeState();

// *** return and store waterAmount:""; from html ***
function waterAmount() {
    const waterAmountVal = $("#waterAmount").value;
    console.log(waterAmountVal);
    apiPutArray["waterAmount"] = waterAmountVal;
};
waterAmount();

// *** submit button PUT click event ***  
$("#dailySubmitBtn").click(function() {
    // set var for today's date in SQL table format
    let todayDatePUTReq = moment().format('YYYY-MM-DD');
    // create object to PUT update
    /* const apiPutArray = {
        water: true,
        waterAmount: 100,
        meditation: true,
        pills: true,
        interaction: true,
        goal: true,
        food: true
    } */

    const apiPutData = Object.assign(apiPutArray, apiPutArray);
    console.log(apiPutData);
    
// PUT api call returning userInput data to SQL table
    $.ajax("/api/progress/" + todayDatePUTReq, {
        type: "PUT",
        data: apiPutData
    }).then(function() {
        console.log("data PUT successful!");
    })
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
    $("#quotesApiQ").text(quote);
    $("#quotesApiA").text(author);  
}); 


