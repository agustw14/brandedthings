import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}



export default function Home({url}){
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch]= useState('')
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('DESC')
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 4);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 4) % items.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    async function fetchProduct(){
        try {
            const {data} = await axios.get(`${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&sort=${sort}&limit=4&page=${currentItems}`)
            const filterCategori = await axios.get(`${url}/apis/pub/branded-things/categories`)
        

            // console.log(data)
            
            setProducts(data.data.query)
            setCategories(filterCategori.data.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [search, filter, sort, currentItems])
    return  (
        <>
                <br/>
                    <div id="PAGE-HOME" className="p-3">

                    <section className="flex flex-col max-w-screen-xl gap-4 p-4 mx-auto">
                        <form action="" method="get" className="flex justify-center items-center">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className="flex w-auto flex-col md:flex-row md:space-x-2 items-center">
                                <span className="font-medium text-gray-600 text-black">Filter by :</span>
                                <select className="select select-bordered" name="filter" onChange={(e) => setFilter(e.target.value)}>
                                    <option value="" selected>Select Categories</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-24 md:w-auto flex flex-col md:flex-row md:space-x-2 items-center">
                            <span className="font-medium text-gray-600 text-black">Sort by :</span>
                                <select className="select select-bordered" defaultValue="" onChange={(e) => setSort(e.target.value)}>
                                    <option value="" disabled></option>
                                    <option value="DESC">Latest</option>
                                    <option value="ASC">Oldest</option>
                                </select>
                            </div>
                        </form>
                    </section>
                        <main>
                            <div className="grid grid-cols-4 gap-2 px-40 my-8 bg-white">
                            {products.map(product =>{
                                return <Card key={product.id} product={product}/>
                            })}
                            </div>
                        </main>
                        <div className="flex flex-col md:flex-row justify-center items-center m-5 gap-5">
                                    <ReactPaginate breakLabel="..." nextLabel="next >" className= "flex flex-col md:flex-row justify-center items-center m-5 gap-5" onPageChange={handlePageClick}
                                        pageRangeDisplayed={2}
                                        pageCount={pageCount}
                                        previousLabel="< previous"
                                        renderOnZeroPageCount={null}
                                />
                            </div>
                    </div>
                    
        </>
    )
}