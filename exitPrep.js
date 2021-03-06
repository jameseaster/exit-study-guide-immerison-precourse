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
// IOCE
// inputs: array
// output: copy of array that is randomly shuffled
// constraints: must be pure
// edge cases: n/a

    let ourArr = [...array];
    let randomArr = [];

    while(ourArr.length){
      let randomNum = (Math.floor(Math.random() * ourArr.length));
      randomArr.push(ourArr[randomNum]);
      ourArr.splice(randomNum, 1);
    }
    return randomArr;
};

var isPalindrome = (string) => {
    // IOCE
    // input: string
    // output: boolean
    // constraints: should be case insensitive
    // edge cases: return undefined if string is empty
    if(string === '') return undefined;

    if(string.length <= 1) return true;

    if(string[0].toLowerCase() === string[string.length-1].toLowerCase()){
        return isPalindrome(string.slice(1, string.length-1));
    } else {
        return false;
    }
}

const mergeObjects = (obj, ...args) => {
    // your code here
    return Object.assign(obj, ...args);
};



//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    for(let key in obj) {
        if(obj[key] === value) obj[key] = newValue;
        if(obj[key].constructor === Object) obj[key] = replaceValuesInObj(obj[key], value, newValue);
    }
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // IOCE
    // Input: object, newKey, newValue
    // Output: updated object with key/value added to key list of keys
    // constraints: use recursion
    // edge cases:
    //
    let keys = Object.keys(obj);
    keys.push(newKey);
    obj[newKey] = newValue;
    keys.forEach((key)=> {
        return obj[key].constructor === Object ?
        addKeysToExistingObj(obj[key], newKey, newValue):
        key
    })
    return obj;
};

var map = (arr, func) => {
    // IOCE
    // Input: array
    // Output: new array with changed elements
    // Constraints: use recursion
    // Edge Cases: should output empty array if the length of the array is 0
    let mappedArr = [];
    if(!arr.length) return [];
    mappedArr.push(func(arr[0]));
    return mappedArr.concat(map(arr.slice(1), func));
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
    // IOCE
    // Inputs: Array of objects
    // Outputs: array of objects
    // Constraints: only use filter nad map (not reduce),
    //              cast members added from the year 2005 to present
    //              cast members whose full name have more than 10 letters
    //              make new keys (appearanceNumber, name, and seasonsActive)
    // Edge Cases: The values cannot be directly mapped to new keys
    return comedians.filter((comedian)=> comedian.begin >= 2005)
        .map((obj)=>{ return {
            appearanceNumber: `#${obj.number}`,
            name: obj.actor,
            seasonsActive: obj.end - obj.begin + 1
            }
        })
};

var comedianNamesFilteredAndMapped = (comedians) => {
    return comedians.filter((comedian)=> comedian.begin >= 2005).map((obj)=>obj.actor)
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    return comedians.reduce((acc, cur)=>{
        if(cur.begin >= 2005){
        acc = acc.concat({
            appearanceNumber: `#${cur.number}`,
            name: cur.actor,
            seasonsActive: cur.end - cur.begin + 1})
        }
        return acc;
    }, []);
};

var comediansReduced2 = (comedians) => {
    return comedians.reduce((acc, cur)=>{
        if(cur.begin >= 2005) acc = acc.concat(cur.actor);
        return acc;
    }, []);
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
