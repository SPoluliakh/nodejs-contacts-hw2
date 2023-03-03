const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Поле name является обязательным",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Поле email является обязательным",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Поле phone является обязательным",
  }),
});

module.exports = schema;
