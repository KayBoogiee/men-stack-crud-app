const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Index
router.get('/', async (req, res) => {
  const plants = await Plant.find({});
  res.render('index', { plants });
});

// New
router.get('/new', (req, res) => res.render('new'));

// Create
router.post('/', async (req, res) => {
  await Plant.create(req.body.plant);
  res.redirect('/');
});

// Edit
router.get('/:id/edit', async (req, res) => {
  const plant = await Plant.findById(req.params.id);
  res.render('edit', { plant });
});

// Update
router.put('/:id', async (req, res) => {
  await Plant.findByIdAndUpdate(req.params.id, req.body.plant);
  res.redirect('/');
});

// Delete
router.delete('/:id', async (req, res) => {
  await Plant.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
