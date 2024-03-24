const getTheTitles = function(book) {
    return book.reduce((title, item, index) => {
        title[index] = item.title;
        return title;
    }, []);
};


// Do not edit below this line
module.exports = getTheTitles;
