import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const base_url = 'https://phase2-aio.vercel.app/apis/branded-things'
import EditImageSection from '../components/EditImageSection';

const EditImageProduct = () => {
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
    document.title = `Edit Product Image ${product?.id || ''} | Branded Things`;
  }, [product?.id]);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="update-product-section">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pt-3 pb-2 mb-3">
            {product && !isLoading ? (
              <EditImageSection {...product} />
            ) : (
              <img src="/happy-pikachu.gif" alt="Loading" width={120} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditImageProduct;
