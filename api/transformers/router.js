const express = require('express');
const Transformer = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Transformer.getAll();
    res.json(data);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await Transformer.create(req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Transformer.remove(id);
    if (removed) {
      res.status(202).json(removed);
    } else {
      res.status(404).json({ message: 'Not Found' });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
