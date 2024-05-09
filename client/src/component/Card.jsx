import { useNavigate } from "react-router-dom"

export default function Card({product}){

    const navigate = useNavigate()

    function handleClick(id){
        navigate(`/viewDetail/${id}`)
    }
    return(
        <>  
            <article className="m-8">
                <div className="card card-bordered w-100 bg-base-100 border-yellow-600 h-full">
                <figure><img src={product.imgUrl} alt="imgage"/></figure>
                <div className="card-body">
                    <h1 className="card-title">{product.name}</h1>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleClick(product.id)}>View Details</button>
                    </div>
                </div>
                </div>
            </article>
        </>
    )
}
