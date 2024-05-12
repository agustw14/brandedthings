import { useEffect } from 'react';

import AddUserSection from '../components/AddUserSection';

const AddUser = () => {
  useEffect(() => {
    document.title = 'Add Staff | Branded Things';
  }, []);

  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-user-section">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <AddUserSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
