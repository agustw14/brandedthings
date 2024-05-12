import { Link } from "react-router-dom"

const Button = ({children, onClick, accent})=> {
    return (
        <button 
         
         className={`btn btn-lg ${
            accent === 'light' ? 'btn-light' : 'btn-primary'
        } rounded-pill w-100 p-2`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button