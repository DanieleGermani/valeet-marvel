const express = require('express');
const router = express.Router();

const Comic = require('../models/comic');

router.post('/comics', (req, res) => {
    delete req.body._id;
    Comic.create(req.body, (err, comic) => {
        if (err)  {
            res.json(err);
        }

        else return console.log(res.json(comic));
    });
});
router.get('/comics', (req, res) => {
    Comic.find({}, (err, comics) => {
        return res.json(comics);
    });
});
router.get('/comics/:id', (req, res) => {
    Comic.findOne({_id:req.params.id}, req.body, (err, comic) => {
        if (err) {
            res.json(err);
        } else {
            res.json(comic);
        }
    });
});

module.exports = router;
