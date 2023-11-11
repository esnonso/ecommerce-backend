import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: String,
    brand: String,
    price: String,
    variation: Array,
    description: String,
    features: String,
    category: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
