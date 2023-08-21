var date = +document.getElementById('date').value;
var month = +document.getElementById('month').value;
var year = +document.getElementById('year').value;

    // var previousDate;
    // var nextDate;
    // var previousMonth;
    // var nextMonth;
    // var previousYear;
    // var nextYear;

// function findDate() {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         if (month === 1 && date === 1) {
//             previousDate = 31;
//             previousYear = year - 1;
//             month = 12;
//             nextDate = date + 1;
//             nextMonth = month;
//             nextYear = year;
//         }
//         else if ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//             if (date === 1){
//                 previousDate = 30;
//                 previousMonth = month - 1;
//             }
//         }
//     }
// }

function showDay() {
    var daysInMonth;
    var month2 = +document.getElementById('month2').value;
    var year2 = +document.getElementById('year2').value;
if (month2 === 2) { 
    if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28; 
    }
} 
else if (month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11) {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

document.getElementById('monthHandle').innerHTML = `
<br>
<div>
    <p>There are ${daysInMonth} days in the month.</p>
</div>
`;
}

function showReading() {
    var number = +document.getElementById('number').value;
    if (number >= 100 && number <= 999) {
        var hundreds = Math.floor(number / 100);
        var tens = Math.floor((number % 100) / 10);
        var ones = number % 10;

        var hundredsText = "";
        var tensText = "";
        var onesText = "";

        if (hundreds === 1) {
            hundredsText = "one hundred";
        } else if (hundreds === 2) {
            hundredsText = "two hundred";
        } else if (hundreds === 3) {
            hundredsText = "three hundred";
        } else if (hundreds === 4) {
            hundredsText = "four hundred";
        } else if (hundreds === 5) {
            hundredsText = "five hundred";
        } else if (hundreds === 6) {
            hundredsText = "six hundred";
        } else if (hundreds === 7) {
            hundredsText = "seven hundred";
        } else if (hundreds === 8) {
            hundredsText = "eight hundred";
        } else {
            hundredsText = "nine hundred";
        }

        if (tens === 0) {
            tensText = "";
        }
        else if (tens === 1) {
            tensText = "ten";
        } else if (tens === 2) {
            tensText = "twenty";
        } else if (tens === 3) {
            tensText = "thirty";
        } else if (tens === 4) {
            tensText = "forty";
        } else if (tens === 5) {
            tensText = "fifty";
        } else if (tens === 6) {
            tensText = "sixty";
        } else if (tens === 7) {
            tensText = "seventy";
        } else if (tens === 8) {
            tensText = "eighty";
        } else {
            tensText = "ninety";
        }

        if (ones === 0) {
            onesText = "";
        }
        else if (ones === 1) {
            onesText = "one";
        } else if (ones === 2) {
            onesText = "two";
        } else if (ones === 3) {
            onesText = "three";
        } else if (ones === 4) {
            onesText = "four";
        } else if (ones === 5) {
            onesText = "five";
        } else if (ones === 6) {
            onesText = "six";
        } else if (ones === 7) {
            onesText = "seven";
        } else if (ones === 8) {
            onesText = "eight";
        } else {
            onesText = "nine";
        }

        var result = hundredsText;
    if (tensText !== "") {
        if (hundredsText !== "") {
            result += " and ";
        }
        result += tensText;
    }
    if (onesText !== "") {
        if (hundredsText !== "" || tensText !== "") {
            result += " ";
        }
        result += onesText;
    }

    document.getElementById('numberHandle').innerHTML = `
<br>
<div>
    <p>The number is read "${result}"</p>
</div>
`;
    }
    else {
        document.getElementById('numberHandle').innerHTML = `
<br>
<div>
    <p>Please enter a valid number</p>
</div>
`;
    }
}

function calculateDistance() {
    var schoolX = +document.getElementById('schoolX').value;
    var schoolY = +document.getElementById('schoolY').value;
    var firstStudentX = +document.getElementById('firstStudentX').value;
    var firstStudentY = +document.getElementById('firstStudentY').value;
    var secondStudentX = +document.getElementById('secondStudentX').value;
    var secondStudentY = +document.getElementById('secondStudentY').value;
    var thirdStudentX = +document.getElementById('thirdStudentX').value;
    var thirdStudentY = +document.getElementById('thirdStudentY').value;

    var firstStudentDistance = Math.sqrt(Math.pow((schoolX - firstStudentX),2) + Math.pow((schoolY - firstStudentY),2));
    var secondStudentDistance = Math.sqrt(Math.pow((schoolX - secondStudentX),2) + Math.pow((schoolY - secondStudentY),2));
    var thirdStudentDistance = Math.sqrt(Math.pow((schoolX - thirdStudentX),2) + Math.pow((schoolY - thirdStudentY),2));

    var maxValue;
    if (firstStudentDistance >= secondStudentDistance && firstStudentDistance >= thirdStudentDistance) {
        maxValue = firstStudentDistance;
    }
    else if (secondStudentDistance >= firstStudentDistance && secondStudentDistance >= thirdStudentDistance) {
        maxValue = secondStudentDistance;
    }
    else {
        maxValue = thirdStudentDistance;
    }

    document.getElementById('calculateHandle').innerHTML = `
<br>
<div>
    <p>The furthest distance is ${maxValue}</p>
</div>
`;
}


