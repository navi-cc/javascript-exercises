const findTheOldest = function(people) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let person = people.reduce((array, person, index) => {
        let obj = {};
        let key = 'yearOfDeath';

        obj['name'] = person.name;
        obj['yearOfBirth'] = person.yearOfBirth;
        obj[key] =  person.yearOfDeath || currentYear
        
        array[index] = obj;

        return array;
    }, []);

    let oldestPerson = person.sort((a, b) => {
        let nextPerson = a.yearOfDeath - a.yearOfBirth;
        let lastPerson = b.yearOfDeath - b.yearOfBirth;
        return nextPerson > lastPerson ? -1: 1;
    });

    return oldestPerson[0];
    
};



// Do not edit below this line
module.exports = findTheOldest;
