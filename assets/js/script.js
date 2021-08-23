/*

color of time slots when page is opened

    - past time slots are grey (class = "past")
    - current time slot is red (class = "current")
    - future time slots are green (class = "future")

when save button is pressed

    - it saves the scheduled task
    - when I refresh the page the saved tasks apear on the screen

*/


// ------ Current time/date function ------ //

var liveTime = document.querySelector(".current-time");

var timer = setInterval(function () {

    var currTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
    liveTime.textContent = currTime;

}, 1000); // 10000ms = 1s




// ------ Stores & Retrieves the scheduel to/from local memory ------ //

var saveBtn = $(".saveBtn");
var text_h7 = $("h7");
var text_h8 = $("h8");
var text_h9 = $("h9");
var text_h10 = $("h10");
var text_h11 = $("h11");
var text_h12 = $("h12");
var text_h1 = $("h1");
var text_h2 = $("h2");
var text_h3 = $("h3");
var text_h4 = $("h4");
var text_h5 = $("h5");
var text_h6 = $("h6");

saveBtn.on("click", function() {
    localStorage.setItem("7am", (text_h7.val()));
    localStorage.setItem("8am", (text_h8.val()));
    localStorage.setItem("9am", (text_h9.val()));
    localStorage.setItem("10am", (text_h10.val()));
    localStorage.setItem("11am", (text_h11.val()));
    localStorage.setItem("12pm", (text_h12.val()));
    localStorage.setItem("1pm", (text_h1.val()));
    localStorage.setItem("2pm", (text_h2.val()));
    localStorage.setItem("3pm", (text_h3.val()));
    localStorage.setItem("4pm", (text_h4.val()));
    localStorage.setItem("5pm", (text_h5.val()));
    localStorage.setItem("6pm", (text_h6.val()));
})

$("#h7").append(localStorage.getItem("7am"));
$("#h8").append(localStorage.getItem("8am"));
$("#h9").append(localStorage.getItem("9am"));
$("#h10").append(localStorage.getItem("10am"));
$("#h11").append(localStorage.getItem("11am"));
$("#h12").append(localStorage.getItem("12pm"));
$("#h1").append(localStorage.getItem("1pm"));
$("#h2").append(localStorage.getItem("2pm"));
$("#h3").append(localStorage.getItem("3pm"));
$("#h4").append(localStorage.getItem("4pm"));
$("#h5").append(localStorage.getItem("5pm"));
$("#h6").append(localStorage.getItem("6pm"));



// ------ Adjusts the time slot colors acording to the current time ------ //

var table_Time = moment().format("k");
console.log(table_Time);

var h7_El = $('#h7');
if (table_Time > 7) {
    h7_El.addClass('past');
}else if (table_Time == 7) {
    h7_El.addClass('present');
}else if (table_Time < 7) {
    h7_El.addClass('future');
}

var h8_El = $('#h8');
if (table_Time > 8) {
    h8_El.addClass('past');
}else if (table_Time == 8) {
    h8_El.addClass('present');
}else if (table_Time < 8) {
    h8_El.addClass('future');
}

var h9_El = $('#h9');
if (table_Time > 9) {
    h9_El.addClass('past');
}else if (table_Time == 9) {
    h9_El.addClass('present');
}else if (table_Time < 9) {
    h9_El.addClass('future');
}

var h10_El = $('#h10');
if (table_Time > 10) {
    h10_El.addClass('past');
}else if (table_Time == 10) {
    h10_El.addClass('present');
}else if (table_Time < 10) {
    h10_El.addClass('future');
}

var h11_El = $('#h11');
if (table_Time > 11) {
    h11_El.addClass('past');
}else if (table_Time == 11) {
    h11_El.addClass('present');
}else if (table_Time < 11) {
    h11_El.addClass('future');
}

var h12_El = $('#h12');
if (table_Time > 12) {
    h12_El.addClass('past');
}else if (table_Time == 12) {
    h12_El.addClass('present');
}else if (table_Time < 12) {
    h12_El.addClass('future');
}

var h1_El = $('#h1');
if (table_Time > 13) {
    h1_El.addClass('past');
}else if (table_Time == 13) {
    h1_El.addClass('present');
}else if (table_Time < 13) {
    h1_El.addClass('future');
}

if (table_Time >= 14) {
    var h2_El = $('#h2');
    h2_El.addClass('past');
}else if (table_Time == 14) {
    h2_El.addClass('present');
}else if (table_Time <= 14) {
    h2_El.addClass('future');
}

var h3_El = $('#h3');
if (table_Time > 15) {
    h3_El.addClass('past');
}else if (table_Time == 15) {
    h3_El.addClass('present');
}else if (table_Time <= 15) {
    h3_El.addClass('future');
}

var h4_El = $('#h4');
if (table_Time > 16) {
    h4_El.addClass('past');
}else if (table_Time == 16) {
    h4_El.addClass('present');
}else if (table_Time < 16) {
    h4_El.addClass('future');
}

var h5_El = $('#h5');
if (table_Time >= 17) {
    h5_El.addClass('past');
}else if (table_Time == 17) {
    h5_El.addClass('present');
}else if (table_Time <= 17) {
    h5_El.addClass('future');
}

var h6_El = $('#h6');
if (table_Time >= 18) {
    h6_El.addClass('past');
}else if (table_Time == 18) {
    h6_El.addClass('present');
}else if (table_Time <= 18) {
    h6_El.addClass('future');
}











