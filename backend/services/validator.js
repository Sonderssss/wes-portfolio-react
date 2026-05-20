import Joi from "joi";

export const validateEmailData = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .pattern(/^[0-9+()-\s]+$/)
      .optional(),
    message: Joi.string().min(10).max(500).required(),
  });

  const { error, value } = schema.validate(data);

  if (error) {
    throw new Error(error.details[0].message);
  }

  return value;
};
