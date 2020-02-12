// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////

// Make 2 functions that randomize the order of an Array's contents.
// Implement one function that is pure (pureShuffle),
// and one that modifies the original array
const pureShuffle = array => {
    const arrayCopy = [...array];
    const shuffledElements = [];

    while(arrayCopy.length){
        let num = Math.floor(Math.random()*arrayCopy.length);
        shuffledElements.push(arrayCopy[num]);
        arrayCopy.splice(num, 1)
    }

    return shuffledElements;
};

var isPalindrome = (string) => {
    // IOCE
    // Input: string
    // Output: boolean
    // Constraints: should return undefined if string is empty
    // Edge cases: case insensitive

    if (string === '') return undefined;
    if (string.length <= 1) return true;
    if (string[0].toLowerCase() === string[string.length-1].toLowerCase()) {
        return isPalindrome(string.slice(1, string.length-1))
    }
    return false;
}

const mergeObjects = (obj, ...args) => {
    // your code here
    return Object.assign(obj, ...args);
};



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // IOCE
    // Input: object, value, newValue
    // Output: object with value replaced by newValue
    // Constraints: use recursion
    // Edge cases:

    for(let key in obj){
        if (obj[key] === value) obj[key] = newValue;
        if (obj[key].constructor === Object) replaceValuesInObj(obj[key], value, newValue);
    }
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
    // IOCE
    // Input: object, newKey, newValue
    // Output: object with a new key/Value pair added at each level
    // Constraints: use recursion
    // Edge cases:

    let keys = Object.keys(obj);
    keys.push(newKey);
    obj[newKey] = newValue;
    keys.forEach((key)=>{
        if (obj[key].constructor === Object){
            addKeysToExistingObj(obj[key], newKey, newValue)
        }
    })
    return obj;
};

var map = (arr, func) => {
    // your code here
    // IOCE
    // Input: array and a function
    // Output: an array of transformed elements (from func)
    // Constraints: use recursion,
    //              should output empty array if the length of the array is 0
    //              modify existing array
    //              output new array
    // Edge cases:

    let arrayCopy = [...arr];
    let transformedArr = [];
    if (!arrayCopy.length) return [];
    transformedArr.push(func(arrayCopy[0]));
    transformedArr = transformedArr.concat(map(arrayCopy.slice(1), func));
    return transformedArr;
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    return comedians.filter((obj)=>obj.begin >= 2005)
    .map((comedian)=>{
        return {
            appearanceNumber: `#${comedian.number}`,
            name: comedian.actor,
            seasonsActive: comedian.end - comedian.begin + 1
        }
    });
};

var comedianNamesFilteredAndMapped = (comedians) => {
    return comedians.filter((obj)=>obj.begin >= 2005).map((comedian)=> comedian.actor);
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    return comedians.reduce((comArr, cur)=>{
        if(cur.begin >= 2005) comArr = comArr.concat(
            {
                appearanceNumber: `#${cur.number}`,
                name: cur.actor,
                seasonsActive: cur.end - cur.begin + 1
            });
        return comArr;
    }, []);
};

var comediansReduced2 = (comedians) => {
    return comedians.reduce((comArr, cur)=>{
        if(cur.begin >= 2005) comArr = comArr.concat(cur.actor);
        return comArr;
    }, []);
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
