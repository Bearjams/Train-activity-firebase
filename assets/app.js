// employee-name
// role
// start-date
// rate

var config = {
    apiKey: "AIzaSyDxQqkGa3AKrcGmGVFalJe40g4hdzADf6w",
    authDomain: "coder-bay-views.firebaseapp.com",
    databaseURL: "https://coder-bay-views.firebaseio.com",
    storageBucket: "coder-bay-views.appspot.com",
    messagingSenderId: "17945436261"
  };

firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

var trainName = $("#train-name").val();
var destination = $("#destination").val();
var trainStart = moment($("#train-start").val().trim(),"MM/DD/YYYY").format("X");
var frequency = $("#frequency").val();
var nextArrival = 150;
var minutesAway = 200;


// database.ref().on("value", function (snapshot) {


// });

$("#submit").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();

    trainName = $("#train-name").val();
    destination = $("#destination").val();
    //trainStart = moment($("#train-start").val().trim(),"MM/DD/YYYY").format("X");
    frequency = $("#frequency").val();
    nextArrival = moment($("#train-start").val().trim(),"MM/DD/YYYY").format("X");
    minutesAway = "16";

    var newEmp = {
        name: trainName,
        destination: destination,
        //start: trainStart,
        rate: frequency
    };

    database.ref().push(newEmp);

    newRow = $("<tr>");
    //var newCol = $("<td>");
    var trainCol = $("<td>").text(trainName);
    var destinationCol = $("<td>").text(destination);
    //var startCol = $("<td>").text(trainStart);
    var rateCol = $("<td>").text(frequency);
    var nextArrivalCol = $("<td>").text(nextArrival);
    var minutesAwayCol = $("<td>").text(minutesAway);

    newRow.append(trainCol);
    newRow.append(destinationCol);
    //newRow.append(startCol);
    newRow.append(rateCol);
    newRow.append(nextArrivalCol);
    newRow.append(minutesAwayCol);


    $("#table-body").append(newRow)






});

database.ref().on("child_added", function(childSnapshot){

    var snapName = childSnapshot.val().name;
    var snapRole = childSnapshot.val().role;
    var snapStart = childSnapshot.val().start;
    var snapRate = childSnapshot.val().rate;


})


// months  = todays date - start date (rounding and half months)
// take monthly rate x months
//Collapse








