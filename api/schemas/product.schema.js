const Joi = require("joi");

const productSchema = Joi.object({
  itemid: Joi.string().optional(), // Optional if it's auto-generated, otherwise `required()`
  title: Joi.string().required().messages({
    "any.required": "Title is required.",
    "string.base": "Title must be a string.",
  }),
  gemType: Joi.string().required().messages({
    "any.required": "Gem Type is required.",
    "string.base": "Gem Type must be a string.",
  }),
  shape: Joi.string().required().messages({
    "any.required": "Shape is required.",
    "string.base": "Shape must be a string.",
  }),
  weight: Joi.number().required().messages({
    "any.required": "Weight is required.",
    "number.base": "Weight must be a number.",
  }),
  measurements: Joi.string().required().messages({
    "any.required": "Measurements are required.",
    "string.base": "Measurements must be a string.",
  }),
  colour: Joi.string().required().messages({
    "any.required": "Colour is required.",
    "string.base": "Colour must be a string.",
  }),
  clarity: Joi.string().required().messages({
    "any.required": "Clarity is required.",
    "string.base": "Clarity must be a string.",
  }),
  treatment: Joi.string().required().messages({
    "any.required": "Treatment is required.",
    "string.base": "Treatment must be a string.",
  }),
  origin: Joi.string().required().messages({
    "any.required": "Origin is required.",
    "string.base": "Origin must be a string.",
  }),
  selection: Joi.string().required().messages({
    "any.required": "Selection is required.",
    "string.base": "Selection must be a string.",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required.",
    "number.base": "Price must be a number.",
  }),
  thumbnail: Joi.required().optional().messages({
    "string.uri": "Thumbnail must be a valid URI.",
  }),
  images: Joi.optional().messages({
    "array.base": "Images must be an array of valid URIs.",
  }),
  video: Joi.string().optional().uri().messages({
    "string.uri": "Video must be a valid URI.",
  }),
});
const updateProductSchema = Joi.object({
  itemid: Joi.string().optional().messages({
    "string.base": "Item ID must be a string.",
  }),
  title: Joi.string().optional().messages({
    "string.base": "Title must be a string.",
  }),
  gemType: Joi.string().optional().messages({
    "string.base": "Gem Type must be a string.",
  }),
  shape: Joi.string().optional().messages({
    "string.base": "Shape must be a string.",
  }),
  weight: Joi.number().optional().messages({
    "number.base": "Weight must be a number.",
  }),
  measurements: Joi.string().optional().messages({
    "string.base": "Measurements must be a string.",
  }),
  colour: Joi.string().optional().messages({
    "string.base": "Colour must be a string.",
  }),
  clarity: Joi.string().optional().messages({
    "string.base": "Clarity must be a string.",
  }),
  treatment: Joi.string().optional().messages({
    "string.base": "Treatment must be a string.",
  }),
  origin: Joi.string().optional().messages({
    "string.base": "Origin must be a string.",
  }),
  selection: Joi.string().optional().messages({
    "string.base": "Selection must be a string.",
  }),
  price: Joi.number().optional().messages({
    "number.base": "Price must be a number.",
  }),
  thumbnail: Joi.optional().messages({
    "string.uri": "Thumbnail must be a valid URI.",
  }),
  images: Joi.optional().messages({
    "array.base": "Images must be an array of valid URIs.",
  }),
  video: Joi.string().optional().uri().messages({
    "string.uri": "Video must be a valid URI.",
  }),
});

module.exports = { productSchema, updateProductSchema };
