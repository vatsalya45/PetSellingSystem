const db = require('../config/db');

const Pet = {
    findAll: (callback) => {
        db.query('SELECT * FROM Pets', callback);
    },
    create: (petData, callback) => {
        db.query('INSERT INTO Pets SET ?', petData, callback);
    }
};

module.exports = Pet;
