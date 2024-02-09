import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import error_icon from "../../assets/icons/error-24px.svg"
import "../AddWarehouse/AddWarehouse.scss";


const AddWarehouse = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

        if (warehouseName.trim() === "") {
            errors.warehouseName = "This field is required";
        }
        if (street.trim() === "") {
            errors.street = "This field is required";
        }
        if (city.trim() === "") {
            errors.city = "This field is required";
        }
        if (country.trim() === "") {
            errors.country = "This field is required";
        }
        if (contactName.trim() === "") {
            errors.contactName = "This field is required";
        }
        if (contactPosition.trim() === "") {
            errors.contactPosition = "This field is required";
        }
        if (phoneNumber.trim() === "") {
            errors.phoneNumber = "This field is required";
        }
        if (email.trim() === "") {
            errors.email = "This field is required";
        }
        
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
            const newWarehouse = {
              warehouse_name: warehouseName,
              address: street,
              city: city,
              country: country,
              contact_name: contactName,
              contact_position: contactPosition,
              contact_phone: phoneNumber,
              contact_email: email,
            }

        const postWarehouse = async()=>{
          try{
            axios.post("http://localhost:8080/warehouses", newWarehouse);
            navigate("/");
          }catch(err){
            console.error(err)
          }
        }
        postWarehouse();
      }
    };
  return (
    <>
      <section className="addwarehouse">
        <div className="addwarehouse__header">
          <Link to="/">
            <img className="addwarehouse__header-back" src={BackIcon} alt="back arrow"></img>
          </Link>
          <h2 className="addwarehouse__title">Add New Warehouse</h2>
        </div>
        <form className="addwarehouse__form" onSubmit={handleSubmit}>
          <div className="addwarehouse__form-column">
            <div className="addwarehouse__form-container">
              <div className="addwarehouse__form-details">
                <h3 className="addwarehouse__details-title">Warehouse Details</h3>
              </div>
              <div className="addwarehouse__details-container">
                <div className="addwarehouse__details-element">
                  <p className="addwarehouse__element-title">Warehouse Name</p>
                  <input
                    className={`addwarehouse__details-input ${
                    formErrors.warehouseName ? "addwarehouse__error" : ""
                    }`}
                    placeholder="Warehouse Name"
                    value={warehouseName}
                    type="text"
                    id="warehousename"
                    name="warehousename"
                    onChange={(e) => setWarehouseName(e.target.value)}
                  />
                  {formErrors.warehouseName && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.warehouseName}</div>
                  )}
                </div>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Street Address</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.street ? "addwarehouse__error" : ""
                  }`}
                  placeholder="Street Address"
                  value={street}
                  type="text"
                  id="street"
                  name="street"
                  onChange={(e) => setStreet(e.target.value)}
                ></input>
                {formErrors.street && (
                  <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.street}</div>
                )}
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">City</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.city ? "addwarehouse__error" : ""
                  }`}
                  placeholder="City"
                  value={city}
                  type="text"
                  id="city"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
                {formErrors.city && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.city}</div>
                )}
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Country</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.country ? "addwarehouse__error" : ""
                  }`}
                  placeholder="Country"
                  value={country}
                  type="text"
                  id="country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  />
                  {formErrors.country && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.country}</div>
                  )}
              </div>
            </div>
            <div className="addwarehouse__form-tablet">
              <h3 className="addwarehouse__details-title">Contact Details</h3>
              <div className="addwarehouse__details-container">
                <p className="addwarehouse__element-title">Contact Name</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.contactName ? "addwarehouse__error" : ""
                  }`}
                  placeholder="Contact Name"
                  value={contactName}
                  type="text"
                  id="number"
                  name="number"
                  onChange={(e) => setContactName(e.target.value)}
                  />
                  {formErrors.contactName && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.contactName}</div>
                  )}
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Position</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.contactPosition ? "addwarehouse__error" : ""
                  }`}
                  placeholder="Position"
                  value={contactPosition}
                  type="text"
                  id="position"
                  name="position"
                  onChange={(e) => setContactPosition(e.target.value)}
                  />
                  {formErrors.contactPosition && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.contactPosition}</div>
                )}
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Phone Number</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.phoneNumber? "addwarehouse__error" : ""
                  }`}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  type="text"
                  id="number"
                  name="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {formErrors.phoneNumber && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.phoneNumber}</div>
                )}
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Email</p>
                <input
                  className={`addwarehouse__details-input ${
                    formErrors.email ? "addwarehouse__error" : ""
                  }`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  name="email"
                />
                {formErrors.email && (
                   <div className="addwarehouse__error-message"><img src={error_icon} alt="error symbol" className="addwarehouse__error-icon"/>{formErrors.email}</div>
                )}
              </div>
            </div>
          </div>
          <div className="addwarehouse__buttons">
            <div className="addwarehouse__buttons-container">
              <button className="addwarehouse__buttons-cancel" >
                <Link to='/' className="addwarehouse__buttons-link">
                    <p className="warehouse__card-cancel--text">Cancel</p>
                </Link>
              </button>
              <button className="addwarehouse__buttons-add" type="submit">
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddWarehouse;
