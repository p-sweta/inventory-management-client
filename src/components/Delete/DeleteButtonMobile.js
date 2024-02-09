import React, { useState } from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import DeleteInventory from "./DeleteInventory";
import "../InventoryItem/InventoryItem.scss";
import "./DeleteInventory.scss";

function DeleteButtonMobile({ id, name }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inventory__item__delete"
      >
        {" "}
        <img
          className="inventory__item__delete"
          src={deleteIcon}
          alt="delete"
        />
      </button>
      {open && (
        <div className="inventory__delete-modal">
          <DeleteInventory id={id} onClose={() => setOpen(false)} name={name} />
        </div>
      )}
    </>
  );
}

export default DeleteButtonMobile;