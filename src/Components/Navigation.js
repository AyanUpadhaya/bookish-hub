import { Link } from "react-router-dom"

export const Navigation = ()=>{
    return (
        <div className="m-auto bg-primary py-5">
            <Link to={'/'} className="text-decoration-none"><h2 className="text-center text-white">Bookish Hub</h2></Link>
        </div>
    )
}