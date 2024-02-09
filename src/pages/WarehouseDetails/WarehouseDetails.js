import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseDetailsList from "../../components/WarehouseDetailsList/WarehouseDetailsList";
import edit from "../../assets/icons/edit-white.svg";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  const { id: warehouseId } = useParams();
  const [currentWarehouse, setCurrentWarehouse] = useState([]);
  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );
        setCurrentWarehouse(res.data);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    getWarehouse();
  }, [warehouseId]);

  const {
    warehouse_name,
    address,
    country,
    city,
    contact_name,
    contact_position,
    contact_email,
    contact_phone,
  } = currentWarehouse;

  if (!currentWarehouse) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details" key={warehouseId}>
      <div className="details__warehouse">
        <div className="details__header">
          <Link to="/">
            <img src={arrow} alt="back button" className="details__back" />
          </Link>
          <h1 className="details__title">{warehouse_name}</h1>
        </div>
        <Link to={`/warehouses/edit/${warehouseId}`} className="details__link">
          <div className="details__edit-container">
            <img src={edit} alt="edit button" className="details__pen" />
            <p className="details__edit">Edit</p>
          </div>
        </Link>
      </div>
      <div className="details__divider"></div>
      <div className="details__info">
        <div className="details__address">
          <h3 className="details__subtitle">WAREHOUSE ADDRESS:</h3>
          <p className="details__body">
            {address}{" "}
            <span className="details__break">
              {city}, {country}
            </span>
          </p>
        </div>
        <div className="details__info-flex">
          <div>
            <h3 className="details__subtitle">CONTACT NAME:</h3>
            <p className="details__body">
              {contact_name} <br /> {contact_position}
            </p>
          </div>
          <div>
            <h3 className="details__subtitle">CONTACT INFORMATION:</h3>
            <p className="details__body">
              {contact_phone} <br /> {contact_email}{" "}
            </p>
          </div>
        </div>
      </div>
      <WarehouseDetailsList/>
    </section>
  );
};

export default WarehouseDetails;
