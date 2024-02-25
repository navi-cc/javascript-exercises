const removeFromArray = function(array1, ...array2) {

    const mergedArray = [...array1, ...array2].sort();

    const getDuplicatedItems = mergedArray.filter((item, index) => mergedArray.indexOf(item) !== index);
    
    const getUniqueItems = mergedArray.filter((item) => {

        for (let i = 0; i < getDuplicatedItems.length; i++) {
            if (getDuplicatedItems[i] == item) return false;
        }

        return true;

    });

    let arr2 = [...array2];

    const getNewArray = getUniqueItems.filter((item) => {

        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === item) return false;
        }

        return true;

    }); 

    
    return getNewArray;

};






// Do not edit below this line
module.exports = removeFromArray;
