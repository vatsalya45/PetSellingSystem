const Pet = require('../models/Pet');

exports.listPets = (req, res) => {
    Pet.findAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.addPet = (req, res) => {
    const petData = req.body;
    Pet.create(petData, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Pet added successfully', petId: results.insertId });
    });
};
