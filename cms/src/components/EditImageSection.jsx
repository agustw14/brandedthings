import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from './Button';

const base_url = 'https://phase2-aio.vercel.app/apis/branded-things'

const ImageForm = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fileRef = useRef(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileRef.current.files[0]);

    try {
      setIsLoading(true);

      await axios.patch(`${base_url}/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      toast.success('Successfully updated product image', { position: 'bottom-right' });
      navigate('/products');
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

  if (isLoading) return <img src="/" alt="Loading" width={120} />;

  return (
    <form id="register-form" onSubmit={handleFormSubmit}>
      <h1 className="mb-3 h3 display-1">Update Image</h1>
      <div className="mb-3">
        <div className="mb-3 input-group">
          <input
            type="file"
            ref={fileRef}
            className="pb-2 form-control"
            id="inputGroupFile02"
            autoComplete="off"
            required
          />
        </div>
        <Button type="submit">Update Image</Button>
      </div>
    </form>
  );
};

export default ImageForm;
