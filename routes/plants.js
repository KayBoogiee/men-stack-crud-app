const express = require('express');
const router = express.Router();
const Plant = require('../models/plant');

// INDEX route - show all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.render('index', { plants });
  } catch (err) {
    res.send(err);
  }
});

// NEW route - show form to create a plant
router.get('/new', (req, res) => {
  res.render('new');
});

// CREATE route - add new plant
router.post('/', async (req, res) => {
  try {
    await Plant.create(req.body);
    res.redirect('/plants');
  } catch (err) {
    res.send(err);
  }
});

// EDIT route
router.get('/:id/edit', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    res.render('edit', { plant });
  } catch (err) {
    res.send(err);
  }
});

// UPDATE route
router.put('/:id', async (req, res) => {
  try {
    await Plant.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/plants');
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
