const Address = require("../models/Address");

// ======================
// GET ALL ADDRESSES
// ======================

const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find().sort({
      createdAt: -1,
    });

    res.json(addresses);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ======================
// ADD ADDRESS
// ======================

const addAddress = async (req, res) => {
  try {
    const address = new Address(req.body);

    await address.save();

    res.status(201).json(address);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

// ======================
// UPDATE ADDRESS
// ======================

const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(address);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ======================
// DELETE ADDRESS
// ======================

const deleteAddress = async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);

    res.json({
      message: "Address Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
};