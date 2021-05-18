import Joi from "joi";

export function validateJoinChallenge(body) {
  const schema = Joi.object({
    challengeName: Joi.string().required(),
  });
  return schema.validate(body);
}
