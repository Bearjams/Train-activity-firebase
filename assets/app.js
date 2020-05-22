// employee-name
// role
// start-date
// rate

var config = {
    apiKey: "AIzaSyDkCc0_OzNn5XTIgJsIUjMKtmly586r_Oc",
    authDomain: "test-project-a9ca6.firebaseapp.com",
    databaseURL: "https://test-project-a9ca6.firebaseio.com",
    projectId: "test-project-a9ca6",
    storageBucket: "test-project-a9ca6.appspot.com",
    messagingSenderId: "634675865281",
    appId: "1:634675865281:web:e5a69ac461e1016cc65640"
};

firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

var trainName = $("#train-name").val();
var destination = $("#destination").val();
//var trainStart = $("#train-start").val().trim();
//var frequency = $("#frequency").val();
var nextArrival = "";
var minutesAway = "";
var tFrequency = $("#frequency").val();;
var firstTime = $("#train-start").val().trim();;
var tMinutesTillTrain;
var nextTrain;
// database.ref().on("value", function (snapshot) {


// });

$("#submit").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();

    

    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#train-start").val().trim();
    tFrequency = $("#frequency").val().trim();
   

    var newEmp = {
        name: trainName,
        destination: destination,       
        start: firstTime,
        rate: tFrequency
    };

    database.ref().push(newEmp);

    // newRow = $("<tr>");
    // var trainCol = $("<td>").text(trainName);
    // var destinationCol = $("<td>").text(destination);
    // var rateCol = $("<td>").text(tFrequency);
    // var nextArrivalCol = $("<td>").text(nextTrain);
    // var minutesAwayCol = $("<td>").text(tMinutesTillTrain);

    // newRow.append(trainCol);
    // newRow.append(destinationCol);
    // newRow.append(rateCol);
    // newRow.append(nextArrivalCol);
    // newRow.append(minutesAwayCol);


    // $("#table-body").append(newRow)






});

database.ref().on("child_added", function (childSnapshot) {

    var snapName = childSnapshot.val().name;
    var snapDest = childSnapshot.val().destination;
    //var snapArrival = childSnapshot.val().arrival;
    var snapStart = childSnapshot.val().start;
    var snapRate = childSnapshot.val().rate;

    var snapRate;

    var snapStart = 0;


    console.log(snapName)
    console.log(snapDest)
    console.log(snapStart)
    console.log(snapRate)
    //console.log(snapArrival)

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("Minutes Until Train: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));

    $("#table-body > tbody").append("<tr><td>" + snapName + "</td><td>" + snapDest + "</td><td>" + snapRate + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>")

})

// var tFrequency = 16;
// var firstTime = "02:08";

// var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
// console.log(firstTimeConverted);

// var currentTime = moment();
// console.log("Current Time: " + moment(currentTime).format("hh:mm"));

// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);

// var tRemainder = diffTime % tFrequency;
// console.log(tRemainder);

// var tMinutesTillTrain = tFrequency - tRemainder;
// console.log("Minutes Until Train: " + tMinutesTillTrain);

// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));

// months  = todays date - start date (rounding and half months)
// take monthly rate x months
//Collapse








