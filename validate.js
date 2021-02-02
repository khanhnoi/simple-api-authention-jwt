//Validation
const Joi = require("joi");

//Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required().max(255),
    email: Joi.string().min(6).required().max(255).email(),
    password: Joi.string().min(6).required().max(1024),
  });
  //Let validate the data before we a user
  console.log(data);
  const validation = schema.validate(data);
  console.log("validation: ");
  console.log(validation);
  const { value, error } = validation;
  return validation;
};

//Register validation
const loginValidation = (data) => {
  const schema = Joi.object({
    //   name: Joi.string().min(6).required().max(255),
    email: Joi.string().min(6).required().max(255).email(),
    password: Joi.string().min(6).required().max(1024),
  });
  //Let validate the data before we a user
  console.log(data);
  const validation = schema.validate(data);
  console.log("validation: ");
  console.log(validation);
  const { value, error } = validation;
  return validation;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
