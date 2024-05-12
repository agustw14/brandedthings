import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const url = 'https://phase2-aio.vercel.app/apis'

const AddUserSection = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await axios.post(`${url}/add-user`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      toast.success('Successfully added new staff', { position: 'bottom-right' });
      setForm({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      });
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

  if (isLoading) return <img src="/goku.gif" alt="Loading" width={120} />;

  return (
    <form id="register-form" onSubmit={handleFormSubmit}>
      <h1 className="mb-3 h3 display-1">Register User</h1>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-username">Username</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="text"
          className="form-control"
          id="register-username"
          placeholder="Enter username ..."
          autoComplete="off"
          required
          value={form.username}
          onChange={(event) => setForm({ ...form, username: event.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-email">Email</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="email"
          className="form-control"
          id="register-email"
          placeholder="Enter email address ..."
          autoComplete="off"
          required
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="register-password">Password</label>
          <label className="text-danger text-end fw-bold">*</label>
        </div>
        <input
          type="password"
          className="form-control"
          id="register-password"
          placeholder="Enter password ..."
          autoComplete="off"
          required
          value={form.password}
          onChange={(event) => setForm({ ...form, password: event.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-phone">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="register-phone"
          placeholder="Enter phone number (optional) ..."
          autoComplete="off"
          value={form.phoneNumber}
          onChange={(event) => setForm({ ...form, phoneNumber: event.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-address">Address</label>
        <textarea
          id="register-address"
          className="form-control"
          rows="3"
          placeholder="Enter address (optional) ..."
          autoComplete="off"
          value={form.address}
          onChange={(event) => setForm({ ...form, address: event.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3">Sign Up</button>
    </form>
  );
};

export default AddUserSection;
