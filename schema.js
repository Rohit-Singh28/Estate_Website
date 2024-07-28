const joi = require('joi');
const Review = require('./models/review');

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().allow("",null),
        price: joi.number().required().min(0),
        location: joi.string().required(),
        country: joi.string().required(),
        // category:joi.string().required(),
    }).required(),
})

module.exports.reviewSchema = joi.object({
    review : joi.object({
        comment: joi.string().required(),
        rating:joi.number().required().min(1).max(5),

    }).required(),
})


// module.exports = listingSchema;