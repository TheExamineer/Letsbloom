const { queryGetBooks,queryAddBooks,queryUpdateBook } = require("../service/services") ;
//get all books
const getBooks = async (req, res, next) => {
    try {
        let books = await queryGetBooks();
        res.status(200).json({ success: true,booksData:books });

    } catch (error) {
        res
            .status(error?.code || 500)
            .json({
                success: false,
                error: error?.message || "Something went wrong",
            });
    }
}

//controller to add book
const addBook = async (req, res, next) => {
    
    const book=req.body;
    const title=book.title;
    const genre = book.genre
    console.log(book,title)
     // Check if the required fields (title and author) are present in the request body
     if (!book || !book.title || !book.author||!book.genre) {
        return res.status(400).json({ success: false, message: 'Title and author are required fields.' });
    }

    try {
        console.log("red")
        const returnedbook = await queryAddBooks(title,book)
        res.status(200).json({ success: true });
        console.log("red2")
    } catch (error) {
        res
            .status(error?.code || 500)
            .json({
                success: false,
                error: error?.message || "Something went wrong",
            });
    }
}

//update book details

const updateBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book=req.body;
        console.log(req,book,id)
        const returnedBook = await queryUpdateBook(id,book);
        res.status(200).json({ success: true });


    } catch (error) {
        res
            .status(error?.code || 500)
            .json({
                success: false,
                error: error?.message || "Something went wrong",
            });
    }
}


module.exports = {
    getBooks,
    updateBook,
    addBook,

}