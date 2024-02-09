import React from "react";
import { Link } from "react-router-dom";
import "./InventoryItem.scss";
import editIcon from "../../assets/icons/edit-blue24px.svg";
import DeleteInventoryItemButton from "../Delete/DeleteInventoryItemButton";
import DeleteButtonMobile from "../Delete/DeleteButtonMobile";

const InventoryItem = ({ item }) => {
  return (
    <article className="inventory__item" key={item.id}>
      <label className="inventory__item__label">INVENTORY ITEM</label>
      <Link
        to={`/inventory/${item.id}`}
        className="inventory__item__name-link"
      >
        <p className="inventory__item__value inventory__item__name">
          {item.item_name} &nbsp;&#62;
        </p>
      </Link>
      <label className="inventory__item__label">CATEGORY</label>
      <p className="inventory__item__value inventory__item__category">
        {item.category}
      </p>
      <DeleteButtonMobile />
      <label className="inventory__item__label">STATUS</label>
      <div className="inventory__item__stock">
        <p
          className={
            item.status === "In Stock"
              ? "inventory__item__value inventory__item__status--green"
              : "inventory__item__value inventory__item__status--red"
          }
        >
          {`${item.status.toUpperCase()}`}
        </p>
      </div>
      <label className="inventory__item__label">QTY</label>
      <p className="inventory__item__value inventory__item__quantity">
        {item.quantity}
      </p>
      <label className="inventory__item__label">WAREHOUSE</label>
      <p className="inventory__item__value inventory__item__warehouse-name">
        {item.warehouse_name}
      </p>
      <div className="inventory__item__delete-link">
        <DeleteInventoryItemButton id={item.id} name={item.item_name} />
      </div>
      <Link
        to={`/inventory/edit/${item.id}`}
        className="inventory__item__edit-link"
      >
        <img className="inventory__item__edit" src={editIcon} alt="edit" />
      </Link>
    </article>
  );
};

export default InventoryItem;
