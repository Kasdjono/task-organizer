// ------ Current time/date function ------ //

var liveTime = document.querySelector('.current-time');

var timer = setInterval(function () {

    var currTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
    liveTime.textContent = currTime;

}, 1000); // 10000ms = 1s


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




// //  ------  Add task section/button ------ //

// //Storing HTML Elements to Variables//
// var modalB = $("#modalB");
// var closeM = $(".close");

// //Onclick Event to Show Modal//
// modalB.on("click", openModal);
// closeM.on("click", closeModal);

// //Function to Show Modal//
// function openModal(){
//     $(function () {
//         $('#modalOne').modal("show");
//     });
// }

// //Function to Exit out of Modal//
// function closeModal(){
//     $(function () {
//         $('#modalOne').modal("hide");
//     });
// }

// var liveTime = document.querySelector('.lead');









/*

color of time slots when page is opened

    - past time slots are grey (class = "past")
    - current time slot is red (class = "current")
    - future time slots are green (class = "future")

when save button is pressed

    - it saves the scheduled task
    - when I refresh the page the saved tasks apear on the screen

*/