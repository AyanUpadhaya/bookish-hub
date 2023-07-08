import { useContext, useState } from "react"
import { MyBooksContext } from "../BooksContext/BooksContext"

const BookCard = (props) => {
    const { _id, name, author, category, img, shelve } = props.book
    const [status,setStatus] = useState('')
    const {handleShelve} = useContext(MyBooksContext)

    const handleShelveChange =(e)=>{
        const currentShelve = e.target.value || ''
        if(currentShelve =='Move to'){
            currentShelve = ''
        }
        if(currentShelve!==''){
            handleShelve(_id,currentShelve)
            alert('shelve changed')
        }
    }

    return (
        <div className="card" style={{ width: '18rem', height: '450px' }}>
            <img src={img} className="card-img-top img-fluid h-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Category: {category}</p>
                <p className="card-text">Author: {author}</p>
                <select className="form-select mt-auto" aria-label="Default select example" onChange={handleShelveChange}>
                <option>Move to</option>
                    <option value="currently reading">Currently Reading</option>
                    <option value="want to read">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            
        </div>
    )
}

export default BookCard