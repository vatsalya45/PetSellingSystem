const db = require('../config/db');

const User = {
    findByEmail: (email, callback) => {
        db.query('SELECT * FROM Users WHERE email = ?', [email], callback);
    },
    create: (userData, callback) => {
        db.query('INSERT INTO Users SET ?', userData, callback);
    }
};

module.exports = User;
