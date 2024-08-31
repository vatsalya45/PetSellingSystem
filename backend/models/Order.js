const db = require('../config/db');

const Order = {
    create: (orderData, callback) => {
        db.query('INSERT INTO Orders SET ?', orderData, callback);
    }
};

module.exports = Order;
