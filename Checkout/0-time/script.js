// new date() function
const timeNow = new Date();
console.log(timeNow);  // shows current time and date

// new Date(milliseconds)
const milsec = new Date(1000000);
console.log(milliseconds); // creates new Date object and adds milliseconds

// Date string
    // Date formats:
        // 1. ISO
const year_month = new Date("2002-09");   // year and month
const year = new Date("2002");   // date and month 
const specific_iso = new Date("2002-09-06T12:00:00Z");   // specific ISO T: separates date and time while Z separates UTC time
console.log(year_month);
console.log(specific_iso);
console.log(year);

       // Short and long date format

const date = new Date("3/09/2022");
console.log(date);

// long date format "MMM DD YYYY"
const date1 = new Date("Jul 1 2020");

// month and day can be in any order
const date2 = new Date("1 Jul 2020");

// month can be full or abbreviated. Also month names are insensitive.

const date3 = new Date("July 1 2020");

const date4 = new Date("JULY, 1, 2020");

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const time1 = new Date(2020,1,22, 4,12,10,0);

/*----------------------------------------------------------------*/
/******************************* Exercise ***************************/
// Program to print date 
date = getElementById('date');
