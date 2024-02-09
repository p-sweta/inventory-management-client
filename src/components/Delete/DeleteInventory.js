import axios from "axios";
import closeX from "../../assets/icons/close-24px.svg";
import "./DeleteInventory.scss";

const DeleteInventory = ({ id, onClose, name }) => {
  const requestApi = "http://localhost:8080";

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(requestApi + "/inventories/" + id);
      console.log(response);

      setTimeout(function () {
        window.location.href = "/inventory";
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="inventory__delete-modal-box">
      <div>
        <h2 className="inventory__delete-modal-header">
          Delete {name} inventory item?
        </h2>
        <img
          onClick={onClose}
          src={closeX}
          alt="close"
          className="inventory__delete-modal-close"
        />
        <div className="inventory__delete-modal-info">
          <p className="inventory__delete-modal-paragraph">
            Please confirm that you would like to delete {name} from the
            inventory list. You will not be able to undo this action
          </p>
        </div>
      </div>
      <div className="inventory__delete-modal-actions">
        <button
          onClick={onClose}
          className="inventory__delete-modal-button inventory__delete-modal-button--cancel"
        >
          Cancel
        </button>

        <button
          onClick={() => handleDelete(id)}
          className="inventory__delete-modal-button inventory__delete-modal-button--delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteInventory;
