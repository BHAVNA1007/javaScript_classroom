const d = new Date();
console.log(d.toLocaleString())


// 6/11/2026, 11:27:24 am
// 2026-11-06T05:27:53.065Z





// const d = new Date("2022-03-25")
// console.log(d)

// 2022-03-25T00:00:00.000Z




// creating date objects    9 ways to create new date object


// new Date() creates a date object with the current date and time:
// const d = new Date();
// console.log(d)
// 2026-11-06T05:32:14.734Z





//new Date(date string) creates a date object from a date string:

// const d = new Date("October 13, 2014 11:13:00");
// console.log(d)
// 2014-10-13T05:43:00.000Z




// new Date(year, month, ...) creates a date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d)
// 2018-12-24T05:03:30.000Z






//Node.js displays the Date object using its own console representation.

//In contrast, when you display it in a browser using innerHTML, JavaScript converts the Date object into a human-readable string.