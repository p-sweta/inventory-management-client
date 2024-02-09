import { Link, useParams } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import EditForm from "../../components/Edit/EditForm";

const EditWarehousePage = () => {
  const { id } = useParams();

  return (
    <div className="edit">
      <div className="edit__container">
        <div className="edit__banner">
          <div className="edit__header">
            <Link to={`/warehouses/${id}`}>
              <img className="edit__back" src={backArrow} alt="back arrow" />
            </Link>
            <h1 className="edit__title">Edit Warehouse</h1>
          </div>
        </div>
        <EditForm />
      </div>
    </div>
  );
};

export default EditWarehousePage;
