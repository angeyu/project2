// import { DataTypes } from "sequelize/types";

// *** js connection check ***
console.log("#loveyoself")

// *** moment.js todayDate to return to page ***
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// *** create api PUT request array before buttons ***
const apiPutArray = {
    water: $("#water").attr('data-status'),
    waterAmount: 0,
    meditation: "",
    pills: "",
    interaction: "",
    goal: "",
    food: ""
};

console.log(apiPutArray);

// *** @ click event function returning class .active to checked buttons" ***

//when any of the buttons with the below class are clicked
$('.btn-group-toggle').on('click', function () {
       // $(this).find('label').addClass('active');

    //and if the label of the particular toggle that was clicked is 'active'
    if ($(this).find('label').hasClass('active')) {

        // set the activeBtnID to that input's ID
        const activeBtnID = $(this).find('input').attr("id");
        console.log(activeBtnID);

        $(this).find('input').attr("data-status", true);

    } else {

        $(this).find('input').attr("data-status", false);
    }

});

// this function is called in the html as an onclick attribute

// *** @ function to return html data and create key value pairs of active state buttons and push them to api array ***
// function activeState() {
//     if ($("#label").hasClass("active")) {
//         const activeBtnID = $("#label").data("id");
//         console.log(activeBtnID);
//     }
// };
// activeState();

// *** @ return and store waterAmount:""; from html ***
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
    
 
// PUT api call returning userInput data to SQL table
    $.ajax("/api/progress/" + todayDatePUTReq, {
        type: "PUT",
        data: apiPutArray
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

