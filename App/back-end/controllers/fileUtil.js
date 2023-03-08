const fs = require('fs-extra');

const attemptFolderDelete = (file) => {
    try {
        if(file && file.destination) {
            fs.remove(file.destination);
        }
    } catch(error) {
        console.error(error);
    }
};

module.exports = {
    attemptFolderDelete
};