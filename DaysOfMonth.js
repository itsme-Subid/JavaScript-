// print total number of days in a month using switch case.

let a = prompt("Enter a month in number");
a = parseInt(a);
if (a <= 12 && a >= 1) {
    let b = prompt("Enter a year");

    a = parseInt(a);
    b = parseInt(b);
    let c;

    switch (a) {
        case 1:
            c = "January";
        case 2:
            c = "February";
        case 3:
            c = "March";
        case 4:
            c = "April";
        case 5:
            c = "May";
        case 6:
            c = "June";
        case 7:
            c = "July";
        case 8:
            c = "August";
        case 9:
            c = "September";
        case 10:
            c = "October";
        case 11:
            c = "November";
        case 12:
            c = "December";
    }

    if (a == 2) {
        console.log(b % 4 == 0 ? `Month ${a} = ${c} has 29 days` : `Month ${a} = ${c} has 28 days`);
    }
    else if ((a % 2 != 0) && (a < 8)) {
        console.log(`Month ${a} = ${c} has 31 days`);
    }
    else if ((a % 2 == 0) && (a >= 8)) {
        console.log(`Month ${a} = ${c} has 31 days`);
    }
    else {
        console.log(`Month ${a} = ${c} has 30 days`);
    }
} else {
    console.log(`Month ${a} is a invalid Month`);
}