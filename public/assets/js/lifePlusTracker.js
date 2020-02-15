$(function () {

// *** js connection check *** //
// console.log("#loveyoself")

// *** moment.js todayDate to return to page *** //
const date = moment().format("MMMM Do YYYY");
$("#todayDate").text(date);

// *** create apiPutObj to use later *** //
const apiPutObj = {};
// create waterAmountVal to store future water amount in array
const waterAmountVal = "";

//set variable for total number of toggles
const toggleVal = 6;
//set variable for number of toggles that have been clicked (true)
let toggleCountNow = 0;
//run for each function to collect the true status of all toggles

//when page loads and database returns values, check datastatuses and mark as active
function activeToggle() {
    $('label .userInput[data-status=true]').each(function(){
        $(this).parent('label').addClass("focus active")
        console.log("done")
     }) 
}

// *** click event function returning class .active to checked buttons" *** //
// when any of the buttons with class .btn-group-toggle are clicked
$('.btn-group-toggle').on('click', function () {

    //and if the label of the particular toggle that was clicked is 'active'
    if ($(this).find('label').hasClass('active')) {
        // set the activeBtnID to that input's ID
        const activeBtnID = $(this).find('input').attr("id");
        // console.log(activeBtnID);
        $(this).find('input').attr("data-status", false);
    } else {
        $(this).find('input').attr("data-status", true);
    }
});

// *** return and store waterAmount:""; from html *** //
$("#waterAmount").on("change", function() {
    const waterAmountClick = $(this);
    console.log(waterAmountClick);
    const waterAmountVal = waterAmountClick[0].value;
    // console.log(waterAmountVal);
    $(this).attr("waterAmount", waterAmountVal);
});

// *** submit button click event PUT functions *** //
$("#dailySubmitBtn").click(function() {
// set var for today's date in SQL table format
    let todayDatePUTReq = moment().format('YYYY-MM-DD');
    // create api PUT request array
    const apiPutObj = {
        water: $("#water").attr('data-status'),
        waterAmount: $("#waterAmount").attr("wateramount"),
        meditation: $("#meditation").attr('data-status'),
        pills: $("#pills").attr('data-status'),
        interaction: $("#interaction").attr('data-status'),
        goal: $("#goal").attr('data-status'),
        food: $("#food").attr('data-status')
    };

    console.log(waterAmountVal);
// check apiPutObj data
    console.log(apiPutObj);
// PUT api call returning userInput data to SQL table
    $.ajax("/api/progress/" + todayDatePUTReq, {
        type: "PUT",
        data: apiPutObj
    }).then(function() {
        console.log("data PUT successful!");
        location.reload();
    })
});    

// *** inspirational quotes third party api call *** //
$.ajax({
    url: "https://type.fit/api/quotes",
    method: "GET"
}).then(function(quotesDataRaw) {
    // console.log(quotesDataRaw);
    const quotesDataParsed = JSON.parse(quotesDataRaw);
    // console.log(quotesDataParsed);
    const randomIndex = Math.floor(Math.random() * 1001)
    // console.log(randomIndex);
    // console.log(quotesDataParsed[randomIndex]);
    const quote = quotesDataParsed[randomIndex].text;
    // console.log(quote);
    const author = quotesDataParsed[randomIndex].author;
    $("#quotesApiQ").text(quote);
    $("#quotesApiA").text(author); 
    
}); 

// *** Progress Bar Update *** //
//code below to update the progress bar in percentages

    $('.userInput[data-status=true]').each(function() {
        toggleCountNow++;
    })
    //set var that will hold percentage
    const todaysProgress = ((toggleCountNow / toggleVal) * 100) + "%";
    //add percentage to progress bar div
    $("#dailyTrackerBar").attr('style', 'width:' + todaysProgress)
    console.log($("#waterTrackerBar").text())

// *** healthboi state change *** //
// changes from img to gif at todaysProgress = 100%
    const healthboiSuccessURL = "/assets/images/healthboi1gif.gif"
    if (todaysProgress === "100%" ) {
        console.log("sparkleboi!")
        $("#sparkleboi").attr("src", healthboiSuccessURL)
    };

    activeToggle();

});