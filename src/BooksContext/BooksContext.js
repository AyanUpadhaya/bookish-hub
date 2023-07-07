import { createContext } from "react";
import { Books } from "../Backend/books";
import { useState } from "react";

export const MyBooksContext = createContext(null);

export const BooksContext =({children})=>{
    const [books,setBooks] = useState(Books)
    const handleShelve =(id,shelve)=>{
        const bookIndex = books.findIndex(book=>book._id == id)
        const updatedBooks = [...books]
        const updatedBook = {...updatedBooks[bookIndex]}
        updatedBook.shelve =shelve
        updatedBooks[bookIndex] = updatedBook
        setBooks(updatedBooks)
    }
    const config ={
        books,
        setBooks,
        handleShelve
    }
    return(
        <MyBooksContext.Provider value={config}>
            {children}
        </MyBooksContext.Provider>
    )

}
