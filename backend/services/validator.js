import Joi from "joi";
import sanitizeHtml from "sanitize-html";

export const validateEmailData = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).trim().max(100).required(),
    email: Joi.string().email().trim().required(),
    phone: Joi.string()
      .pattern(/^[0-9+()-\s]+$/)
      .trim()
      .optional(),
    message: Joi.string().min(10).max(500).trim().required(),
  });

  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    throw new Error(error.details[0].message);
    console.log("Validation error:", error.details[0].message);
  }

  return {
    ...value,
    name: sanitizeHtml(value.name, { allowedTags: [], allowedAttributes: {} }),
    email: sanitizeHtml(value.email, {
      allowedTags: [],
      allowedAttributes: {},
    }),
    phone: value.phone
      ? sanitizeHtml(value.phone, { allowedTags: [], allowedAttributes: {} })
      : undefined,
    message: sanitizeHtml(value.message, {
      allowedTags: [],
      allowedAttributes: {},
    }),
  };
};
