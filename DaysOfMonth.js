// print total number of days in a month using switch case.

let a = prompt("Enter a month in number");
let b = prompt("Enter a year");

if (a == 2) {
    console.log(b % 4 == 0 ? `Month ${a} has 29 days` : `Month ${a} has 28 days`);
}
else if ((a % 2 != 0) && (a < 8)) {
    console.log(`Month ${a} has 31 days`);
}
else if ((a % 2 == 0) && (a >= 8)) {
    console.log(`Month ${a} has 31 days`);
}
else{
    console.log(`Month ${a} has 30 days`);
}