let arr1 = [1, 2, 3];
let arr2 = [5, 1, 2, 3, 10];
let arr3 = [1, -2, -3];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [4, 4, 4, 4, 4, 4];

let strArr1 = ['colt', 'matt', 'tim', 'test'];
let strArr2 = ['hi', 'goodbye', 'smile'];

let arrOfObj = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'},
]

let arrOfNames = [
    {first: 'Elie', last: 'Schoppik'},
    {first: 'Tim', last: 'Garcia', isCatOwner:true},
    {first: 'Mat', last: 'Lane'},
    {first: 'Colt', last: 'Steele', isCatOwner: true},
]

//////////////// For Each Section ///////////////////////////////

function doubleValues(arr){
    let result = [];
    arr.forEach(function(val){
        result.push(val * 2)
    })
    return result
}

function onlyEvenValues(arr){
   let result = [];

   arr.forEach(function(val){
       if(val % 2 === 0){
           result.push(val)
       }
   })
   return result
}

function showFirstAndLast(arr){
    let result = [];

    arr.forEach(function(val){
        let firstLast = val[0] + val[val.length -1]
        result.push(firstLast)
    })
    return result
}

function addKeyToValue(arr, str1, str2){
    let result = [];

    arr.forEach(function(val){
        val[str1] = str2
        result.push(val);
    })
    return result
}

function vowelCount(str){
    let result = {};
    let vouwels = 'aeiou'

    let arr = str.toLowerCase().split('')

    arr.forEach(function(val){
        if(vouwels.includes(val)){
            if(result[val] === undefined){
                result[val] = 1;
            }else{
                result[val]++
            }
        }
    });
    return result
};

/////////////////////// MAP SECTION /////////////////////


function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2
    });
};

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i
    });
};

function extreactKey(arr, str){
    return arr.map(function(val){
        return val[str]
    });
};

function extractFullName(arr){
    return arr.map(function(val){
        return `${val.first} ${val.last}`
        
    });
};

//////////////////// Filter Section //////////////////////

function filterByValue(arr, str){
    return arr.filter(function(val){
        return val[str]
    });
};

function find(arr, num){
    let newArr =  arr.filter(function(val){
        return val === num
    });
    return newArr[0]
};

function findObj(arr, str){
    let newArr =  arr.filter(function(val){
        return val[str]
    });
    return newArr[0]
};

function removeVowels(str){
    let arr = str.toLowerCase().split('');
    let vouwels = 'aeiou';

    let newArr =  arr.filter(function(val){
        return (!vouwels.includes(val))
    })
    return newArr.join('')
}

function doubleOddNumbers(arr){
    let newArr = arr.filter(function(val){
        return val % 2 !== 0
    })

    return newArr.map(function(val){
        return val * 2
    })
}