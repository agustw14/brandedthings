import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductTable from '../components/ProductTable';

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Products | Branded Things';
  }, []);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="product-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Products</h1>
        <button
          className="btn btn-primary rounded-pill"
          id="new-product"
          onClick={() => navigate('/add/products')}
        >
          <span className="icon material-symbols-outlined">add</span>New Product
        </button>
      </div>
      <div className="row">
        <div className="col-12 table-responsive">
          <ProductTable />
        </div>
      </div>
    </section>
  );
};

export default Products;
