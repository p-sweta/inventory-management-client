import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import "./InventoryDetailsPage.scss";

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const [currInventory, setCurrInventory] = useState();
  const api_url = process.env.REACT_APP_API_URL;

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
  }, [api_url, id]);

  if (!currInventory) {
    return <p>Loading...</p>;
  }
  return (
    <div className="inv-details-page">
      <InventoryItemDetails currInventory={currInventory} />
    </div>
  );
};

export default InventoryDetailsPage;
