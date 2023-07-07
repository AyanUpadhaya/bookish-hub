import { useContext, useState } from "react"
import { MyBooksContext } from "../BooksContext/BooksContext"
import BookCard from "../Components/BookCard"

const SearchBooks =()=>{
    const {books,setBooks} = useContext(MyBooksContext)
    const [allbooks,setAllBooks] = useState(books)
    const handleSearch = (e)=>{
        if(e.target.value==''){
            setAllBooks(books)
        }else{
            const bookName = e.target.value
            setAllBooks(allbooks.filter(book=>book.name.toLowerCase().includes(bookName.toLowerCase())))
        }
    }
    return(
        <>
            <div className="container">
                <div className="mx-auto d-flex flex-column justify-content-center align-items-center">
                    <h3>Search Books</h3>
                    <input type="text" onChange={handleSearch} />
                </div>

                <div className="mb-3">
                <h3 className="my-5 text-center">All Books</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 flex-wrap p-3">
                    {
                        allbooks.map(book=><BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
                </div>
            </div>
            
        </>
    )
}

export default SearchBooks