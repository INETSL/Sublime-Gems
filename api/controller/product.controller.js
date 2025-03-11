const mongoose = require("mongoose");
const { Product } = require("../models");
const { productSchema, updateProductSchema } = require("../schemas");
const path = require("path");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    if (!req.files || !req.body) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const { value, error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        status: "fail",
        error: error.message,
        message: "Your request cannot be processed. Please try again",
      });
    }

    const {
      title,
      itemid,
      gemType,
      shape,
      weight,
      measurements,
      colour,
      clarity,
      treatment,
      origin,
      selection,
      price,
      video,
    } = value;

    const thumbnail = req.files.thumbnail
      ? `${req.protocol}://${req.get("host")}/uploads/${
          req.files.thumbnail[0].filename
        }`
      : null;

    const images = req.files.images
      ? req.files.images.map(
          (file) =>
            `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
        )
      : [];

    const product = new Product({
      title,
      itemid,
      gemType,
      shape,
      weight,
      measurements,
      colour,
      clarity,
      treatment,
      origin,
      selection,
      price,
      thumbnail,
      images,
      video,
    });

    const newProduct = await product.save();

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
};

const selectProducts = async (req, res) => {
  try {
    const { id, itemid } = req.query;

    let products;

    if (itemid) {
      // Fetch by itemid
      products = await Product.findOne({ itemid });
      if (!products) {
        return res.status(404).json({
          status: "fail",
          message: "No product found with the given itemid",
        });
      }
    } else if (id) {
      // Validate and fetch by id
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
          status: "fail",
          message: "No product found with the given id",
        });
      }
      products = await Product.findById(id);
      if (!products) {
        return res.status(404).json({
          status: "fail",
          message: "No product found with the given id",
        });
      }
    } else {
      // Fetch all products if no query parameters are provided
      products = await Product.find();
      if (products.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "No products found",
        });
      }
    }

    res.status(200).json({
      status: "success",
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "fail",
      error: error.message,
      message: "Your request cannot be processed. Please try again",
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { value, error } = updateProductSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "fail",
        error: error.message,
        message: "Validation failed",
      });
    }

    // Handle thumbnail update
    if (req.files?.thumbnail) {
      // Remove old thumbnail if it exists
      if (product.thumbnail) {
        const oldThumbnailPath = path.join(
          __dirname,
          "../uploads",
          path.basename(product.thumbnail)
        );
        if (fs.existsSync(oldThumbnailPath)) fs.unlinkSync(oldThumbnailPath);
      }

      value.thumbnail = `${req.protocol}://${req.get("host")}/uploads/${
        req.files.thumbnail[0].filename
      }`;
    }

    // Handle images update
    if (req.files?.images) {
      // Remove old images
      if (product.images && product.images.length > 0) {
        product.images.forEach((img) => {
          const oldImagePath = path.join(
            __dirname,
            "../uploads",
            path.basename(img)
          );
          if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
        });
      }

      value.images = req.files.images.map(
        (file) =>
          `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
      );
    }

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(id, value, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res
      .status(500)
      .json({ message: "Failed to update product", error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Remove thumbnail
    if (product.thumbnail) {
      const thumbnailPath = path.join(
        __dirname,
        "../uploads",
        path.basename(product.thumbnail)
      );
      if (fs.existsSync(thumbnailPath)) fs.unlinkSync(thumbnailPath);
    }

    // Remove images
    if (product.images && product.images.length > 0) {
      product.images.forEach((img) => {
        const imagePath = path.join(
          __dirname,
          "../uploads",
          path.basename(img)
        );
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
      });
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete product", error: error.message });
  }
};

module.exports = {
  createProduct,
  selectProducts,
  updateProductById,
  deleteProductById,
};
