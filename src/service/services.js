const initializeSupabase = require("../database");
const supabase = initializeSupabase();

const queryGetBooks = async () => {
    const { data: existingBooks, error: errorFetchingExistingBooks } =
    await supabase
      .from("Books")
      .select("*")
      console.log(existingBooks)

  if (errorFetchingExistingBooks) {
    throw {
      code: 500,
      message: "Not able to fetch data from the database",
    };
  } 
  return existingBooks;
}
//queey to add book

const queryAddBooks = async (title,book) => {
    console.log("zero")
    const { data: existingBook, error: errorFetchingExistingBook } =
    await supabase
      .from("Books")
      .select("*")
      .eq("title",title)
 console.log("one")

  if (errorFetchingExistingBook) {
    throw {
      code: 500,
      message: "Not able to fetch data from the database",
    };
  }
  if(existingBook.length==1){
    throw {
        code: 500,
        message: "Book exist already",
      };
  }
  const { data: updatedBook, error: errorupdatingExistingBook } =
  await supabase
    .from("Books")
    .insert(book)

    if(errorupdatingExistingBook){
        throw {
            code: 500,
            message: "Update failed",
          };
      }
  return updatedBook;
}
const queryUpdateBook = async (id,book) => {
    const { data: updatedBooks, error: errorupdatingBook } =
    await supabase
      .from("Books")
      .update(book)
      .eq('id',id)
      
  if (errorupdatingBook) {
    throw {
      code: 500,
      message: "Not able to update book 'id' invalid",
    };
  } 
  return updatedBooks;
}



module.exports = {
    queryGetBooks,
    queryAddBooks,
    queryUpdateBook,

}