const Product = require("../models/Product");

// Create Product
const addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      brand,
      image,
      price,
      stock,
      rating,
    } = req.body;

    const product = await Product.create({
      title,
      description,
      category,
      brand,
      image,
      price,
      stock,
      rating,
    });

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProducts = async (req, res) => {
  try {
    const { search, category, maxPrice, sort } = req.query;
    let query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    if (maxPrice) {
      query.price = {
        $lte: Number(maxPrice),
      };
    }
    console.log("REQ QUERY:", req.query);
console.log("MONGO QUERY:", query);
    let productsQuery = Product.find(query);

if (sort === "low") {
  productsQuery = productsQuery.sort({ price: 1 });
}

if (sort === "high") {
  productsQuery = productsQuery.sort({ price: -1 });
}

const products = await productsQuery;

    // ⭐ Ye line missing thi
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// const searchProducts = async (req, res) => {
//   try {
//     const keyword = req.query.keyword;

//     const products = await Product.find({
//       title: {
//         $regex: keyword,
//         $options: "i",
//       },
//     });

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };
// const getProductsByCategory = async (req, res) => {
//   try {
//     const products = await Product.find({
//       category: req.params.category,
//     });

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  addProduct,
  getProducts,
  // searchProducts,
  //  getProductsByCategory,
   getSingleProduct,
    getProductById,
};