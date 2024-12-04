const mongoose = require("mongoose");
const Joi = require("joi");
const JoiObjectId = require("joi-objectid");
Joi.objectId = JoiObjectId(Joi);

// Book schema definition
const bookSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    branch: { type: String, required: true },
    curriculum: { type: String, required: true },
    semester: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    fullName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
});

// Model definition
const Book = mongoose.model("Book", bookSchema);

// Validation function
function validateBook(book) {
    const schema = Joi.object({
        seller: Joi.objectId().required(), // Validate MongoDB ObjectId
        name: Joi.string().required(),
        branch: Joi.string().required(),
        curriculum: Joi.string().required(),
        semester: Joi.number().required(),
        originalPrice: Joi.number().required(),
        sellingPrice: Joi.number().required(),
        fullName: Joi.string().required(),
        phoneNumber: Joi.number().required(),
    });

    return schema.validate(book);
}

// Export the model and validation function
module.exports = { Book, validateBook };
