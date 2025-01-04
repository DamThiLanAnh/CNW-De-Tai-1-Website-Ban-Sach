const express = require('express');
const { postABook, getAllBooks, getSingleBook, updateABook, deleteABook } = require('./book_controller');
const router = express.Router();

// frontend => backend server => controller => book schema => database => send to server 
// => back to the frontend
// post = when commit something frontend to db
// get = when get something back from db
// put/patch = when edit or update something
//delete = when delete something


// post a book
router.post('/create-book', postABook);

// get all books
router.get('/', getAllBooks)

// get a single book
router.get('/:id', getSingleBook)

// update a book
router.put('/edit/:id', updateABook)

// delete a book
router.delete('/:id', deleteABook)

module.exports = router;