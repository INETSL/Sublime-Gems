const Joi = require("joi");

const createBannerOneSchema = Joi.object({
  title: Joi.string(),
});

const createBannerTwoSchema = Joi.object({
  title: Joi.string(),
});

module.exports = {
  createBannerOneSchema,
  createBannerTwoSchema,
};
