import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import error_icon from "../../assets/icons/error-24px.svg";
import "./AddInventoryItem.scss";

const AddInventoryItem = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemStatus, setItemStatus] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemWarehouse, setItemWarehouse] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate();
  const api_url = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/inventories`);
        setInventoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [api_url]);

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

  const handleStatus = (e)=>{
    setItemStatus(e.target.value);
    setVisible(e.target.value !== "Out of Stock");
    if(e.target.value === "Out of Stock"){
      setItemQuantity("0");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    if (itemName.trim() === "") {
        errors.itemName = "This field is required";
    }
    if (itemDescription.trim() === "") {
        errors.itemDescription = "This field is required";
    }
    if (itemCategory.trim() === "") {
        errors.itemCategory = "This field is required";
    }
    if (itemQuantity.trim() === "") {
        errors.itemQuantity = "This field is required";
    }
    if (itemWarehouse.trim() === "") {
        errors.itemWarehouse = "This field is required";
    }

    setFormErrors(errors);

    const findWarehouse = ()=>{
     if(itemWarehouse === "Manhattan"){
            return 1
        } else if(itemWarehouse === "Washington"){
            return 2
        } else if(itemWarehouse === "Jersey"){
            return 3
        } else if(itemWarehouse === "San Fran"){
            return 4
        } else if(itemWarehouse === "Santa Monica"){
            return 5
        } else if(itemWarehouse === "Seattle"){
            return 6
        } else if(itemWarehouse === "Miami"){
            return 7
        }       
    }

    if (Object.keys(errors).length === 0) {
      const item = {
        item_name: itemName,
        description: itemDescription,
        category: itemCategory,
        status: itemStatus,
        quantity: itemQuantity,
        warehouse_id: findWarehouse()
      } 
      const post = async ()=>{
        try{
            await axios.post(`${api_url}/inventories`, item);
            navigate("/inventory");
        }catch(err){
            console.log(`Err:${err}`)
        }
      }
      post();
    }
  };
  return (
    <div className="add-item">
      <div className="add-item__header">
        <NavLink to={"/inventory"} className="add-item__link">
          <button className="add-item__arrow-button">
            <img
              className="add-item__arrow"
              src={arrow_back}
              alt="arrow back button"
            />
          </button>
        </NavLink>
        <h2 className="add-item__title">Add New Inventory Item</h2>
      </div>
      <form className="add-item__form" onSubmit={handleSubmit}>
        <div className="add-item__flex">
        <div className="add-item__details">
          <h3 className="add-item__form-title">Item Details</h3>
          <label htmlFor="itemName" className="add-item__label">
            Item Name
          </label>
          <input
            className={`add-item__input ${
                formErrors.itemName ? "add-item__error" : ""
            }`}
            type="text"
            id="itemName"
            name="itemName"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {formErrors.itemName && (
            <div className="add-item__error-message"><img src={error_icon} alt="error symbol" className="add-item__error-icon"/>{formErrors.itemName}</div>
          )}
          <label htmlFor="itemDescription" className="add-item__label">
            Description
          </label>
          <textarea
            id="itemDescription"
            name="itemDescription"
            value={itemDescription}
            className={`add-item__textarea ${
                formErrors.itemDescription? "add-item__error" : ""
            }`}
            placeholder="Please enter a brief description.."
            onChange={(e)=> setItemDescription(e.target.value)}
          ></textarea>
          {formErrors.itemDescription && (
            <div className="add-item__error-message"><img src={error_icon} alt="error symbol" className="add-item__error-icon"/>{formErrors.itemDescription}</div>
          )}
          <label htmlFor="itemCategory" className="add-item__label">
            Category
          </label>
          <select
            name="itemCategory"
            id="itemCategory"
            className={`add-item__category add-item__drop-down ${
                formErrors.itemCategory ? "add-item__error" : ""
              }`}
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            <option value="" disabled>Please select</option>
            {categories &&
              categories.map((category, index) => {
                return (
                  <option key={index} className="add-item__value">
                    {category}
                  </option>
                );
              })}
          </select>
          {formErrors.itemCategory && (
            <div className="add-item__error-message"><img src={error_icon} alt="error symbol" className="add-item__error-icon"/>{formErrors.itemCategory}</div>
          )}
        </div>
        <div className="add-item__availability">
          <h3 className="add-item__form-title">Item Availability</h3>
            <label htmlFor="itemStatus" className="add-item__label add-item__status">
                Status
            </label>
            <div className="add-item__choices-container">    
                    <div className="add-item__choice add-item__choice--instock">
                        <input
                            type="radio"
                            id="inStock"
                            name="available"
                            className="add-item__select"
                            value="In Stock"
                            onChange={handleStatus}
                        />
                        <label htmlFor="itemStatus" className="add-item__stock">
                            In stock
                        </label>
                    </div>
                    <div className="add-item__choice add-item__choice--outstock">
                        <input
                            type="radio"
                            id="outStock"
                            name="available"
                            className="add-item__select"
                            value="Out of Stock"
                            onChange={handleStatus}
                        />
                        <label htmlFor="itemStatus" className="add-item__stock">
                            Out of stock
                        </label>
                    </div>               
            </div>
            <div className={`add-item__qty-container ${visible? "" : "add-item__display"}`}>
                <label htmlFor="itemQuantity" className="add-item__label">
                Quantity
                </label>
                <input
                className={`add-item__input ${
                   formErrors.itemQuantity ? "add-item__error" : ""
                }`}
                type="text"
                id="itemQuantity"
                name="itemQuantity"
                placeholder="500"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                />
                {formErrors.itemQuantity && (
                    <div className="add-item__error-message"><img src={error_icon} alt="error symbol" className="add-item__error-icon"/>{formErrors.itemQuantity}</div>
                )}
            </div>
          
          <label htmlFor="itemWarehouse" className="add-item__label">
            Warehouse
          </label>
          <select
            name="itemWarehouse"
            id="itemWarehouse"
            className={`add-item__warehouse add-item__drop-down 
            ${formErrors.itemWarehouse ? "add-item__error" : ""}
            `}
            value={itemWarehouse}
            onChange={(e) => setItemWarehouse(e.target.value)}
          >
            <option value="" disabled>Please select</option>
            {warehouses &&
              warehouses.map((warehouse, index) => {
                return (
                  <option key={index} className="add-item__value">
                    {warehouse}
                  </option>
                );
              })}
          </select>
          {formErrors.itemWarehouse && (
            <div className="add-item__error-message"><img src={error_icon} alt="error symbol" className="add-item__error-icon"/>{formErrors.itemWarehouse}</div>
          )}
        </div>
        </div>
        <div className="add-item__buttons-container">
          <NavLink to={`/inventory`}>
            <button className="add-item__button add-item__button--cancel">
              Cancel
            </button>
          </NavLink>
          <button className="add-item__button add-item__button--add" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddInventoryItem;