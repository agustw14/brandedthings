import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import NewProductSection  from '../components/NewProductSection';
const base_url = 'https://phase2-aio.vercel.app/apis/branded-things'

const EditProducts = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`${base_url}/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        setProduct(data.data);
      } catch (error) {
        toast.error(error.response.data.error, { position: 'bottom-right' });

        if (error.response.data.statusCode === 500) {
          localStorage.removeItem('access_token');
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  useEffect(() => {
    document.title = `Edit Product ${product?.id || ''} | Branded Things`;
  }, [product?.id]);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Update Product</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          {product && !isLoading ? (
            <NewProductSection {...product} />
          ) : (
            <img src="/happy-pikachu.gif" alt="Loading" width={120} />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditProducts;
