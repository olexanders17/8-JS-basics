/*
 1. Prepare and show message in console.
 - Create variables for person name, time, place and event
 - Event should be entered using prompt
 // tip: var smth = prompt("Please enter value", "Default value");
 - Other variables should be set as you wish
 - Join all values to one sentence and show it in console
 // example: Valera has a meeting today at 17:00 somewhere in Warsaw.
 */


setMeeting = function () {
    var meetingItem = {name: "", place: "", time: "", additionalItem: ""};
    var meetingMessage = "My name is " + meetingItem.name + " and I am whaiting you on meeting in " + meetingItem.place + " at " + meetingItem.time + "i will see you with " + meetingItem.additionalItem;
    meetingItem.name = prompt("What is your name : ", "Unknown");
    meetingItem.place = prompt("What is your meeting place: ", "London");
    meetingItem.time = prompt("What is your meeting place: ", "10 P.M.");
    meetingItem.additionalItem = prompt("Please take something special : ", "apple");
    console.log(meetingMessage);


}

/*2. Find and show (using alert) distance between 2 points.
 - Create variables for x1, y1, x2, y2, result
 - Coordinates of second point (X2, Y2) should be entered using prompt
 - Other variables should be set as you wish
 - Find distance, set it to result variable
 - Alert the result with description
 // example: The distance between points A(0,1) and B(0,11) is 10.*/

findDistance = function () {

    var x1, y1, x2, y2, result;

    x1 = 1;
    y1 = 1;

    var defaultX2 = 1;
    var defaultY2 = 1;


    var draftX2 = parseInt(prompt("Write *X* coordinat (?,_) "));
    if (!isNaN(draftX2)) {
        x2 = draftX2;

    }
    else {
        x2 = defaultX2;
    }


    var draftY2 = parseInt(prompt("Write *Y* coordinat (_,?) "));
    if (!isNaN(draftY2)) {
        y2 = draftY2;

    }
    else {
        y2 = defaultY2;
    }


    result = Math.abs(Math.pow((x1 - x2), 2)) + Math.abs(Math.pow((y1 - y2), 2));

    alert("The shortest way from  first point (x= " + x1 + " y= " + y1 + ")  and  second point (x= " + x2 + " y= " + y2 + " ) is   " + result);
    console.log(result);

}


/*3. Show in console using FOR.
 #
 ##
 ###
 ####
 #####
 ######
 #######
 ########
 #########
 ##########*/

var showPrarmid = function () {
    var piramidWidht = 10;

    for (var i = 0; i < piramidWidht; i++) {
        var line = "";
        for (var j = 0; j <= i; j++) {
            line += "#";

        }
        console.log(line);

    }


}

/*
 4. Show in console using WHILE.
 # # # # #
 # # # # #
 # # # # #
 # # # # #
 # # # # #
 # # # # #
 # # # # #*/

var showSquare = function () {

    var rows = 8;

    var i = 0;
    while (i < rows) {
        if (i % 2) {
            console.log("# # # # #");
        } else {
            console.log(" # # # # #");
        }
        i++;


    }


}


/*
 5. Create “Guess number” game.
 - Create variable for random number (from 0 to 100) and set it using Math.random()
 // tip: Math.random() returns number from 0 to 1, so you have to 
 // multiply it by 100 and then convert result to integer.
 - Ask user (with prompt) to guess the number
 - If entered number doesn’t equal to our variable, alert “Our number is higher, try again” or “Our number is lower, try again”. Then ask user to enter number again.
 - If user guessed the number, show message “You are right, the number is [number]”.*/

var guessGame = function () {

    var randomNumber = Math.random() * 100;
    randomNumber=Math.round(randomNumber);
    var guessNumber = prompt("Guess number from 0 to 100");

    if (guessNumber == randomNumber) {
        alert("You are right, the number is [" + guessNumber + "]");
    }
    else if (guessNumber > randomNumber) {
        alert("Our number is higher, try again. Random number is " + randomNumber);
    }else if (guessNumber < randomNumber) {
        alert("Our number is lower, try again. Random number is " + randomNumber);
    }


}