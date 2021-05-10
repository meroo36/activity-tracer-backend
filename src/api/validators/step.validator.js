import Joi from "joi";

export function validateStep(body) {
    const schema = Joi.object({
        count: Joi.number().required(),
        date: Joi.string().required(),
    });
    return schema.validate(body);
}
