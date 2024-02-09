import axios from "axios";
import closeXIcon from "../../assets/icons/close-24px.svg";
import "../DeleteWarehouseModal/DeleteWarehouseModal.scss";

const DeleteWarehouseModal = ({ id, name, onClose }) => {

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/warehouses/${id}`);
      console.log(response);
      setTimeout(function () {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="overlay">
        <article className="warehouse__card">
          <div className="warehouse__card-info">
            <h1 className="warehouse__card-title">Delete {name} Warehouse?</h1>
            <img className="warehouse__card-close" onClick={onClose} src={closeXIcon} alt="x icon"></img>
            <p className="warehouse__card-text">
              Please confirm that you'd like to delete {name} from the list of warehouses. You won't be able to undo this action.
            </p>
          </div>
          <div className="warehouse__card-buttons">
            <button className="warehouse__card-cancel" type="button" onClick={onClose}>
              {" "}
              <p className="warehouse__card-cancel--text">Cancel</p>{" "}
            </button>
            <button className="warehouse__card-delete" type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default DeleteWarehouseModal;
