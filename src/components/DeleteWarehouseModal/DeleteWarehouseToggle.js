import React, { useState } from 'react';
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import DeleteWarehouseModal from './DeleteWarehouseModal';
import "../DeleteWarehouseModal/DeleteWarehouseModal.scss"

const DeleteWarehouseToggle = ({ id, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button 
        onClick={() => setIsOpen(!isOpen)}
        className="warehouse__button">
            {" "}
            <img 
            className="warehouse__button-delete"
            src={deleteIcon}
            alt="delete icon">
            </img>
        </button>
        {isOpen && (
            <div className="warehouse__delete-modal">
                <DeleteWarehouseModal id={id} name={name} onClose={() => setIsOpen(false)} /> 
            </div>
        )}
        </>
    );
};

export default DeleteWarehouseToggle;