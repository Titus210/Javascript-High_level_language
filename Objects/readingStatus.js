/* displays reading status of book:
    , book name, author, author name, reading status
*/

var library = [
    {
        author: "Paulo Coelho",
        title: "The Alchemist",
        readingStatus: true
    },
    {
        title: "The power of subconscious mind",
        author: "Dr. Joseph Murphy",
        readingStatus: true
    },
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        readingStatus: false
    }
];

// loop through list and check books read or not

for (var i = 0; i < library.length; i++) {
    // check if you have read the book and print read
    if (library[i].readingStatus)
        console.log("You have already read " + library[i].title + " by " + library[i].author);
    // if not read print 
    else {
        console.log("You need to read " + library[i].title + " by " + library[i].author)
    }
}   