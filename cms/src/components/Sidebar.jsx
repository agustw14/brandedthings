import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    toast.success('Successfully logged out', { position: 'bottom-right' });
    navigate('/login');
  };

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
      <div className="pt-3 position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link role="button" to="/products" className="nav-link" id="nav-product">
              {' '}
              <span className="icon material-symbols-outlined me-2">shopping_bag</span>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link role="button" to="/categories" className="nav-link" id="nav-category">
              {' '}
              <span className="icon material-symbols-outlined me-2">category</span>Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link role="button" to="/add/user" className="nav-link" id="nav-category">
              {' '}
              <span className="icon material-symbols-outlined me-2">account_circle</span>Add User
            </Link>
          </li>
        </ul>
        <h6 className="px-3 mt-4 mb-1 sidebar-heading d-flex justify-content-between align-items-center text-muted text-uppercase">
          <span>Account</span>
        </h6>
        <ul className="mb-2 nav flex-column">
          {/* <li className="nav-item">
            <Link role="button" to="#" className="nav-link">
              {' '}
              <span className="icon material-symbols-outlined me-2">person</span>Hej,{' '}
              <span id="username">Hacktiv8!</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <a role="button" className="nav-link" id="nav-logout" onClick={handleLogout}>
              {' '}
              <span className="icon material-symbols-outlined me-2">logout</span>Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
