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


const pureShuffle = array => {
    // your code here
    const arrayCopy = [...array];
    const shuffled = [];

    while(arrayCopy.length){
        let num = Math.floor(Math.random()*arrayCopy.length)
        shuffled.push(arrayCopy[num]);
        arrayCopy.splice(num, 1);
    }

    return shuffled;
};

var isPalindrome = (string) => {
    // your code here
    if(string === '') return undefined;
    if(string.length <= 1) return true;
    if(string[0].toLowerCase() === string[string.length-1].toLowerCase()){
        return isPalindrome(string.slice(1, string.length-1));
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
    // your code here
    Object.keys(obj).forEach(key=>{
        if(obj[key] === value) obj[key] = newValue;
        if(typeof obj[key] === 'object') replaceValuesInObj(obj[key], value, newValue)
    })
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
    obj[newKey] = newValue;

    Object.keys(obj).forEach(key =>{
        if(typeof obj[key] === 'object') addKeysToExistingObj(obj[key], newKey, newValue)
    })

    return obj;
};

var map = (arr, func) => {
    // your code here
    if(!arr.length) return [];
    let mappedArr = [];
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
    // Your code here
    return comedians.filter(obj=>obj.begin >= 2005 && obj.actor.length > 10)
        .map(comedian=> {
            return  {
                        appearanceNumber: `#${comedian.number}`,
                        name: comedian.actor,
                        seasonsActive: comedian.end - comedian.begin + 1
                    }
        })
};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here
    return comedians.filter(obj=>obj.begin >= 2005 && obj.actor.length > 10)
        .map(comedian=> comedian.actor);
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // Your code here
    return comedians.reduce((arr, cur)=>{
        if(cur.begin>=2005 && cur.actor.length>10) {
            arr = arr.concat({
                appearanceNumber: `#${cur.number}`,
                name: cur.actor,
                seasonsActive: cur.end - cur.begin + 1
            })
        }
        return arr;
    }, [])

};

var comediansReduced2 = (comedians) => {
    // Your code here
    return comedians.reduce((arr, cur)=>{
        if(cur.begin>=2005 && cur.actor.length>10) arr = arr.concat(cur.actor);
        return arr;
    }, [])
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
