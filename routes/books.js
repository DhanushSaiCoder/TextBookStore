const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Book, validateBook } = require("../models/Book");

router.post("/", async (req, res) => {
    try {
        // Validate the book object
        const { error } = validateBook(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        console.log('req.body',req.body )
        // Save the new book
        const book = new Book(req.body);
        console.log('book object',book)
        const result = await book.save();
        res.status(201).send({ message: "Book created successfully", book: result });
    } catch (error) {
        console.error("Error posting book:", error);
        res.status(500).send({ message: "An error occurred", error });
    }
});

module.exports = router;
