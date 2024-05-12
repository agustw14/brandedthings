import { useEffect } from 'react';

import CategoriPage from '../components/CategoriPage';

const Categories = () => {
  useEffect(() => {
    document.title = 'Categories | Branded Thins';
  }, []);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="category-section">
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="display-2">Categories</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <CategoriPage />
        </div>
      </div>
    </section>
  );
};

export default Categories;
