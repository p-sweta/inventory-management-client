import "./WarehouseDetailsList.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteInventoryItemButton from "../Delete/DeleteInventoryItemButton";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import edit from "../../assets/icons/edit-blue24px.svg";

const WarehouseDetailsList = () => {
  const { id } = useParams();
  const [currentWarehouse, setcurrentWarehouse] = useState([]);
  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const res = await axios(
          `http://localhost:8080/warehouses/${id}/inventories`
        );
        setcurrentWarehouse(res.data);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    getWarehouse();
  }, [id]);
  return (
    <div className="item">
      {currentWarehouse.map((item) => {
        return (
          <article key={item.id} className="item__article">
            <div className="item__inventory">
              <h3 className="item__title">INVENTORY ITEM</h3>
              <Link to={`/inventory/${item.id}`} className="item__link">
                <h2 className="item__name">
                  {item.item_name}
                  <img
                    className="item__arrow-icon"
                    src={chevron}
                    alt="arrow icon"
                  />
                </h2>
              </Link>
              <h3 className="item__title">CATEGORY</h3>
              <p className="item__info">{item.category}</p>
            </div>
            <div className="item__status">
              <h3 className="item__title">STATUS</h3>
              <p
                className={
                  !(item.status === "In Stock")
                    ? "item__outstock"
                    : "item__instock"
                }
              >
                {item.status}
              </p>
              <h3 className="item__title">QTY</h3>
              <div className="item__quanity">
                <p className="item__info">{item.quantity}</p>
              </div>
            </div>
            <div className="item__actions">
              <DeleteInventoryItemButton id={item.id} name={item.item_name} />
              <Link to={`/inventory/edit/${item.id}`}>
                <img className="item__edit-icon" src={edit} alt="edit icon" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default WarehouseDetailsList;
