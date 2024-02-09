import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import "./EditInventoryItem.scss";

const EditInventoryItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState("");
  const [currInventory, setCurrInventory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [status, setStatus] = useState("");
  const [itemQty, setItemQty] = useState(0);
  const [itemWarehouse, setItemWarehouse] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [qtyErr, setQtyErr] = useState("");
  const api_url = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_url + "/inventories");
        setInventoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        if (id) {
          const response = await axios.get(`${api_url}/inventories/${id}`);
          setCurrInventory(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchInventory();
  }, [id]);

  useEffect(() => {
    if (currInventory) {
      setItemName(currInventory.item_name);
      setItemDescription(currInventory.description);
      setItemCategory(currInventory.category);
      setStatus(currInventory.status);
      setItemQty(currInventory.quantity);
      setItemWarehouse(currInventory.warehouse_name);
    }
  }, [currInventory]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (formFieldValidation()) {
      const inventoryItem = {
        item_name: itemName,
        description: itemDescription,
        category: itemCategory,
        status: status,
        quantity: itemQty,
        warehouse_name: itemWarehouse,
      };

      axios
        .put(`${api_url}/inventories/${id}`, inventoryItem)
        .then((res) => {
          alert("Update Successful!!");
          navigate("/inventory");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let isValid = true;
  const formFieldValidation = () => {
    if (!itemName) {
      setNameErr("This field is required");
      isValid = false;
    }

    if (!itemDescription) {
      setDescriptionErr("This field is required");
      isValid = false;
    }

    if (status === "In Stock" && !itemQty) {
      setQtyErr("This field is required");
      isValid = false;
    }

    return isValid;
  };

  let categories = [];
  let warehouses = [];
  if (inventoryData) {
    categories = [
      ...new Set(Object.values(inventoryData).map((item) => item.category)),
    ];
    warehouses = [
      ...new Set(
        Object.values(inventoryData).map((item) => item.warehouse_name)
      ),
    ];
  }

  let quantityClass;
  let inStockClass;
  let outStockClass;
  if (status === "In Stock") {
    quantityClass = "edit-item__qty-container";
    inStockClass = "edit-item__stock edit-item__stock--selected";
    outStockClass = "edit-item__stock";
  } else {
    quantityClass =
      "edit-item__qty-container edit-item__qty-container--selected";
    inStockClass = "edit-item__stock";
    outStockClass = "edit-item__stock edit-item__stock--selected";
  }

  return (
    <div className="edit-item">
      <div className="edit-item__header">
        <NavLink to={`/inventory/${id}`} className="edit-item__link">
          <button className="edit-item__arrow-button">
            <img
              className="edit-item__arrow"
              src={arrow_back}
              alt="arrow back button"
            />
          </button>
        </NavLink>
        <h2 className="edit-item__title">Edit Inventory Item</h2>
      </div>
      <form className="edit-item__form" onSubmit={handleOnSubmit}>
        <div className="edit-item__form-container">
          <div className="edit-item__details">
            <h3 className="edit-item__form-title">Item Details</h3>
            <label htmlFor="itemName" className="edit-item__label">
              Item Name
            </label>
            <input
              className="edit-item__input"
              type="text"
              id="itemName"
              name="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            {nameErr && (
              <div className="edit-item__error">
                <img className="edit-item__error-img" src={error} alt="error" />
                <p className="edit-name__error-msg">{nameErr}</p>
              </div>
            )}
            <label htmlFor="itemDescription" className="edit-item__label">
              Description
            </label>
            <textarea
              id="itemDescription"
              name="itemDescription"
              className="edit-item__textarea"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            ></textarea>
            {descriptionErr && (
              <div className="edit-item__error">
                <img className="edit-item__error-img" src={error} alt="error" />
                <p className="edit-name__error-msg">{descriptionErr}</p>
              </div>
            )}
            <label htmlFor="itemCategory" className="edit-item__label">
              Category
            </label>
            <select
              name="itemCategory"
              id="itemCategory"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="edit-item__category edit-item__drop-down"
            >
              {categories &&
                categories.map((category, index) => {
                  return (
                    <option key={index} className="edit-item__value">
                      {category}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="edit-item__availability">
            <h3 className="edit-item__form-title">Item Availability</h3>
            <label
              htmlFor="itemStatus"
              className="edit-item__label edit-item__status"
            >
              Status
            </label>
            <div className="edit-item__choices-container">
              <div className="edit-item__choice edit-item__choice--instock">
                <input
                  type="radio"
                  id="instock"
                  name="status"
                  className="edit-item__select"
                  value={"In Stock"}
                  checked={status === "In Stock"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="instock" className={inStockClass}>
                  In stock
                </label>
              </div>
              <div className="edit-item__choice edit-item__choice--outstock">
                <input
                  type="radio"
                  id="outstock"
                  name="status"
                  className="edit-item__select"
                  value={"Out of Stock"}
                  checked={status === "Out of Stock"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="outstock" className={outStockClass}>
                  Out of stock
                </label>
              </div>
            </div>

            <div className={quantityClass}>
              <label htmlFor="itemQty" className="edit-item__label">
                Quantity
              </label>
              <input
                className="edit-item__input "
                type="text"
                id="itemQty"
                name="itemQty"
                value={itemQty}
                onChange={(e) =>
                  setItemQty(e.target.value ? e.target.value : 0)
                }
              />
              {qtyErr && (
                <div className="edit-item__error">
                  <img
                    className="edit-item__error-img"
                    src={error}
                    alt="error"
                  />
                  <p className="edit-name__error-msg">{qtyErr}</p>
                </div>
              )}
            </div>
            <label htmlFor="itemWarehouse" className="edit-item__label">
              Warehouse
            </label>
            <select
              name="itemWarehouse"
              id="itemWarehouse"
              value={itemWarehouse}
              onChange={(e) => setItemWarehouse(e.target.value)}
              className="edit-item__warehouse edit-item__drop-down"
            >
              {warehouses &&
                warehouses.map((warehouse, index) => {
                  return (
                    <option key={index} className="edit-item__value">
                      {warehouse}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="edit-item__buttons-container">
          <NavLink
            to={`/inventory/${id}`}
            className="edit-item__button edit-item__button--cancel edit-item__link"
          >
            Cancel
          </NavLink>
          <button className="edit-item__button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventoryItem;
