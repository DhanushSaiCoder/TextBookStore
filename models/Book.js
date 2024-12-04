const express = require('express')
const mongoose = require('mongoose')
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    branch: { type: String, required: true },
    curriculum: { type: String, required: true },
    semester: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    fullName: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
})
const Book = mongoose.model("Book", bookSchema);

function validateBook(book) {
    const schema = Joi.object({
        user: Joi.string().required(),
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
module.exports = { Book, validateBook }