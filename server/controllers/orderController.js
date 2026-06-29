const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const order = new Order({
      user: req.user._id,

      products: req.body.products,

      address: req.body.address,

      phone: req.body.phone,

      paymentMethod: req.body.paymentMethod,

      totalPrice: req.body.totalPrice,
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

exports.getOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};