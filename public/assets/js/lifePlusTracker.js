// import { DataTypes } from "sequelize/types";

// *** js connection check ***
console.log("#loveyoself")

// *** moment.js todayDate to return to page ***
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// *** create api PUT request array before returning button values ***
const apiPutObj = {
    water: "",
    waterAmount: 0,
    meditation: "",
    pills: "",
    interaction: "",
    goal: "",
    food: ""
};

// *** click event function returning class .active to checked buttons" ***
function clickedYes() {
    $("#label").attr("class", "active");
    console.log("class .active successfully added!");
    const activeBtnID = $('input').attr("id");
    console.log("active button id = " + activeBtnID);
}
// this function is called in the html as an onclick attribute

// *** @ function to return html data and create key value pairs of active state buttons and push them to api array ***
/* function activeState() {
    if ($("#label").hasClass("active")) {
        const activeBtnID = $("#label").data("id");
        console.log("active button id = " + activeBtnID);
        apiPutObj["activeBtnID"] = "true";
    }; 
}; */
// activeState();

// *** @ return and store waterAmount:""; from html ***
function waterAmount() {
    const waterAmountVal = $("#waterAmount").value;
    console.log("water val = " + waterAmountVal);
    apiPutObj["waterAmount"] = waterAmountVal;
};
// waterAmount();

// *** submit button PUT click event ***  
$("#dailySubmitBtn").click(function() {
// set var for today's date in SQL table format
    let todayDatePUTReq = moment().format('YYYY-MM-DD');
// check apiPutObj data
    console.log(apiPutObj);
// PUT api call returning userInput data to SQL table
    $.ajax("/api/progress/" + todayDatePUTReq, {
        type: "PUT",
        data: apiPutObj
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
    
    
    //Progress Bar update//
    //code below to update the progress bar in percentages

    //set variable for total number of toggles
    const toggleVal = 6;

    //set variable for number of toggles that have been clicked (true)
    let toggleCountNow = 0;

    //run for each function to collect the true status of all toggles
    $('.userInput[data-status=true]').each(function() {
        toggleCountNow++;
    })

    //set var that will hold percentage
    let todaysProgress = ((toggleCountNow / toggleVal) * 100) + "%";

    //add percentage to progress bar div
    $("#dailyTrackerBar").attr('style', 'width:' + todaysProgress)

}); 

/* $("#userInput").click(function() {
    clickedYes()
    .then(function(activeState()) {
        return results;
    console.log(results);
    })
}) */

/* $("#waterAmount").change(function() {
         waterAmount();
     }) */