import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useWarehouseById } from "../ApiFunctions/WarehouseApi";
import "./EditForm.scss";

const EditForm = () => {
  let { id } = useParams();
  const warehouse = useWarehouseById(id);
  const [warehouseName, setWarehouseName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const apiUrl = "http://localhost:8080/warehouses";

  const handleSubmit = (e) => {
    e.preventDefault();
    const warehouse = {
      warehouse_name: warehouseName,
      address: street,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: contactPosition,
      contact_phone: phoneNumber,
      contact_email: email,
    };
    axios.put(`${apiUrl}/${id}`, warehouse).then((response) => {
      console.log(response);
    });

    window.location.href = "/";
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  useEffect(() => {
    if (warehouse) {
      setWarehouseName(warehouse.warehouse_name);
      setStreet(warehouse.address);
      setCity(warehouse.city);
      setCountry(warehouse.country);
      setContactName(warehouse.contact_name);
      setContactPosition(warehouse.contact_position);
      setPhoneNumber(warehouse.contact_phone);
      setEmail(warehouse.contact_email);
    }
  }, [warehouse]);

  return (
    <div className="edit__form-container">
      <form className="edit__form" onSubmit={handleSubmit}>
        <div className="edit__form-warehouse-details">
          <div className="edit__form-warehouse-header">
            <h2>Warehouse Details</h2>
          </div>
          <label className="edit__form-label" htmlFor="warehouseName">
            Warehouse Name
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="warehouseName"
            name="warehouseName"
            value={warehouseName}
            onChange={(e) => setWarehouseName(e.target.value)}
          />

          <label className="edit__form-label" htmlFor="street">
            Street Address
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label className="edit__form-label" htmlFor="city">
            City
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label className="edit__form-label" htmlFor="country">
            Country
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="edit__form-contact-details">
          <div className="edit__form-contact-header">
            <h2>Contact Details</h2>
          </div>
          <label className="edit__form-label" htmlFor="contactName">
            Contact Name
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="contactName"
            name="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <label className="edit__form-label" htmlFor="contactPosition">
            Position
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="contactPosition"
            name="contactPosition"
            value={contactPosition}
            onChange={(e) => setContactPosition(e.target.value)}
          />

          <label className="edit__form-label" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label className="edit__form-label" htmlFor="email">
            Email
          </label>
          <input
            className="edit__form-input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="edit__form-button-container">
          <button className=" edit__form-button--cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="edit__form-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
