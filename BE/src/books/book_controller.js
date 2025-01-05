const Book = require('./book_model');
const postABook = async (req, res) => {
    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "Book post successfully", book: newBook });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to create book" });
    }
}

// get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).send(books)

    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({ message: "Failed to fetch books" })
    }
}

// get single books
const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ message: "Book not Found!" })
        }
        res.status(200).send(book)

    } catch (error) {

        console.error("Error fetching book", error);
        res.status(500).send({ message: "Failed to fetch book" })
    }

}

// update a book
const updateABook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if (!updatedBook) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        });
    } catch (err) {
        console.error("Error updating book", error);
        res.status(500).send({ error: "Failed to update book" });
    }
}

// delete a books
const deleteABook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        });
    } catch (err) {
        console.error("Error deleting book", error);
        res.status(500).send({ error: "Failed to delete book" });
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateABook,
    deleteABook,
};