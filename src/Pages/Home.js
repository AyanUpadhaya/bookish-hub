import { useContext } from "react"
import { MyBooksContext } from "../BooksContext/BooksContext"
import BookCard from "../Components/BookCard"
import { Link } from "react-router-dom"


const Home =()=>{
    
    const {books,setBooks} = useContext(MyBooksContext)
    const currentlyReadingBooks = books.filter(book=>book.shelve=='currently reading')
    const wantToReadBooks = books.filter(book=>book.shelve=='want to read')
    const readBooks = books.filter(book=>book.shelve=='read')
    return (
        <>
            <div className="d-flex justify-content-center py-5">
                <Link to={'/searchbooks'} className="btn btn-danger">Search</Link>
            </div>
            <div className="mb-3">
                <h3 className="my-5 text-center">Currently Reading Books</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 p-3">
                    {
                        currentlyReadingBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
            </div>
            
            <div className="mb-3">
                <h3 className="my-5 text-center">Want To Read Books</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 p-3">
                    {
                        wantToReadBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
            </div>

            <div className="mb-3">
                <h3 className="my-5 text-center">Read Books</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 p-3">
                    {
                        readBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
            </div>
        </>
    )
}

export default Home