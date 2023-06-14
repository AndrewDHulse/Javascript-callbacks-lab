// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.
console.log('hello world')
function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);



// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration
function sortLength(a,b) {
    if (a.length < b.length){
        return -1;
    }
    else if (a.length> b.length){
        return 1;
    } else
    return 0;
}

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// The sort method sorts "in place", that is, it modifies the array
words.sort(sortLength);


// Check that logging words now outputs
console.log(words);
// ["nice", "short", "medium", "lengthy", "delicious"]


// Exercise 3
//
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter(word=>word.length >= 7);

// Check that logging longWords outputs
console.log(longWords);
// ["lengthy", "delicious"]