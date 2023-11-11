import express from "express";
const productRouter = express.Router();
import Product from "../../Models/Product/index.js";
import { errorHandler } from "../../Functions/error.js";

productRouter.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

productRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, brand, price, variation, description, features } = req.body;
    if (title.length < 2 || title === "")
      errorHandler("Title lesser than 3 characters", 500);
    if (brand.length < 2 || brand === "")
      errorHandler("Brand lesser than 3 characters", 500);
    if (price.length < 2 || price === "") errorHandler("Invalid price", 500);
    if (description.length < 10 || description === "")
      errorHandler("Invalid description", 500);
    if (features.length < 10 || features === "")
      errorHandler("Invalid features", 500);
    if (features.length < 4 || features === "")
      errorHandler("Invalid category", 500);
    const product = new Product({
      title,
      brand,
      price,
      description,
      features,
      category,
    });
    product.variation.push(variation);
    await product.save();
    return res.status(200).json({ message: "Success! Product added to store" });
  } catch (err) {
    next(err);
  }
});

export default productRouter;
