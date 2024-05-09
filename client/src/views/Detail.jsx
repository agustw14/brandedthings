import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail({url}){
    const [product, setProduct] = useState("")
    const {id} = useParams()

    async function fetchProduct(){
        try {
            const {data} = await axios.get(`${url}/apis/pub/branded-things/products/${id}`);
            setProduct(data.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchProduct()
    },[])

    return (
        <>
            <br/><br/>
            <div className="p-20 bg-gray-100 shadow-2xl flex flex-row">
                        <figure className="flex flex-1">
                            <img src={product.imgUrl} alt="product image" className="w-1/2 ml-20 rounded-xl"/>
                        </figure>
                        <div className="flex flex-1 flex-col">
                            <b className="mb-5 text-left">{product.name}</b>
                            <p className="text-left">
                                {product.description}
                            </p><br/>
                            <a href="/"><button className="btn btn-primary" onClick={() => handleClick}>Back To Home</button></a>
                        </div>
                        <div className="justify-start">
                            <a href="/"></a>
                        </div>
            </div>
        </>
    )
}