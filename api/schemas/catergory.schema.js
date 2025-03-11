const Joi = require("joi");

const catergorySchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
});

module.exports = catergorySchema;
