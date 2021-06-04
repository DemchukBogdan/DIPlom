const express = require('express');
const router = express.Router();

const { Device } = require('../models');

router.get('/', async (req, res) => {
  try {
    const devices = await Device.find({});
    res.status(200).send(devices);
  } catch (error) {
    res.status(500).json({
      err: err,
    });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { name, category, qty, state } = req.body;

    const device = await Device.create({
      name: name || 'device',
      category,
      qty,
      state: state || false,
    });
    console.log(device.id);
    res.status(200).json({
      message: 'Ok',
    });
  } catch (error) {
    res.status(500).json({
      err: error,
    });
  }
});

router.get('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const device = await Device.remove({
      _id: id,
    });

    console.log(device.id);
  } catch (error) {
    res.status(500).json({
      err: err,
    });
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const device = await Device.findById(id);

    res.status(200).json({
      state: device.State,
    });
  } catch (error) {
    res.status(500).json({
      err: err,
    });
  }
});

router.post('/edit', async (req, res) => {
  try {
    console.log('body', JSON.stringify(req.body));
    const id = req.body.id;
    const { State } = req.body;

    const device = await Device.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        State,
      }
    );
    res.status(200).json({
      message: 'Ok',
    });
    console.log(device);
  } catch (error) {
    res.status(500).json({
      err: error,
    });
  }
});

module.exports = router;
