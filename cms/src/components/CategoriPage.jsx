import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const base_url = 'https://phase2-aio.vercel.app/apis/branded-things'

const CategoriPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`${base_url}/categories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        setCategories(data.data);
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

    fetchCategories();
  }, [navigate]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody id="table-category">
        {!isLoading ? (
          categories.map((category, index) => (
            <tr key={category.id}>
              <td scope="row">#{index + 1}</td>
              <td className="fw-bold">{category.name}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2} className="text-center">
              <img src="/goku.gif" alt="Loading" width={120} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CategoriPage;
