import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-0 bg-white shadow navbar sticky-top flex-md-nowrap" id="navbar">
      <Link
        to="/products"
        className="px-3 d-flex align-items-center navbar-brand col-md-3 col-lg-2 me-0 fs-6"
      >
        <img width="30" className="d-inline-block me-2" />
        <span>Admin Panel</span>
      </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-menu"
        aria-controls="sidebar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </header>
  );
};

export default Navbar;
