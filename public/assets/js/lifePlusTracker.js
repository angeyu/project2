// import { DataTypes } from "sequelize/types";

// *** js connection check *** //
console.log("#loveyoself")

// *** moment.js todayDate to return to page *** //
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// create waterAmountVal to store future water amount in array
const waterAmountVal = "";

// *** @ click event function returning class .active to checked buttons" *** //
// when any of the buttons with class .btn-group-toggle are clicked
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

// *** @ return and store waterAmount:""; from html *** //
$("#waterAmount").on("change", function() {
    const waterAmount = $(this);
    console.log(waterAmount);
    const waterAmountVal = waterAmount[0].value;
    console.log(waterAmountVal)
})

// *** submit button PUT click event *** //
$("#dailySubmitBtn").click(function() {
// set var for today's date in SQL table format
    let todayDatePUTReq = moment().format('YYYY-MM-DD');
    // create api PUT request array
    const apiPutObj = {
        water: $("#water").attr('data-status'),
        waterAmount: waterAmountVal ,
        meditation: $("#meditation").attr('data-status'),
        pills: $("#pills").attr('data-status'),
        interaction: $("#interaction").attr('data-status'),
        goal: $("#goal").attr('data-status'),
        food: $("#food").attr('data-status')
    };
        console.log(apiPutObj);

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

// *** inspirational quotes api call *** //
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
    
    
// *** Progress Bar update *** //
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

// *** lil humxn state change *** //
// changes from img to gif at todaysProgress = 100%
