import { NavLink } from "react-router-dom";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white.svg";
import "./InventoryItemDetails.scss";

const InventoryItemDetails = ({ currInventory }) => {
  return (
    <section className="inv-item">
      <div className="inv-item__header">
        <div className="inv-item__title-container">
          <NavLink to={"/inventory"} className="inv-item__link">
            <button className="inv-item__arrow-button">
              <img
                className="inv-item__arrow"
                src={arrow_back}
                alt="arrow back button"
              />
            </button>
          </NavLink>
          <h2 className="inv-item__title">{currInventory.item_name}</h2>
        </div>
        <div className="inv-item__edit-container">
          <NavLink
            to={`/inventory/edit/${currInventory.id}`}
            className="inv-item__link"
          >
            <button className="inv-item__edit">
              <img
                className="inv-item__edit-icon"
                src={edit}
                alt="edit button"
              />
              <p className="inv-item__edit-text">Edit</p>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="inv-item__details">
        <div className="inv-item__left">
          <div className="inv-item__description">
            <h3 className="inv-item__label">ITEM DESCRIPTION:</h3>
            <p className="inv-item__text">{currInventory.description}</p>
          </div>
          <div className="inv-item__category">
            <h3 className="inv-item__label">CATEGORY:</h3>
            <p className="inv-item__text">{currInventory.category}</p>
          </div>
        </div>
        <div className="inv-item__right">
          <div className="inv-item__top-right">
            <div className="inv-item__status">
              <h3 className="inv-item__label">STATUS:</h3>
              <p
                className={`inv-item__text ${
                  !(currInventory.status === "In Stock")
                    ? "inv-item__outstock"
                    : "inv-item__instock"
                } `}
              >
                {currInventory.status}
              </p>
            </div>
            <div className="inv-item__quantity">
              <h3 className="inv-item__label">QUANTITY:</h3>
              <p className="inv-item__text">{currInventory.quantity}</p>
            </div>
          </div>
          <div className="inv-item__warehouse">
            <h3 className="inv-item__label">WAREHOUSE:</h3>
            <p className="inv-item__text">{currInventory.warehouse_name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
