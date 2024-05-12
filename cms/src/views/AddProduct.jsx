import { useEffect } from 'react';

import NewProductSection  from '../components/NewProductSection';

const AddProduct = () => {
  useEffect(() => {
    document.title = 'Add Product | Branded Things';
  }, []);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">New Product</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <NewProductSection />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;