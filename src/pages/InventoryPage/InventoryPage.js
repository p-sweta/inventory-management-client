import axios from "axios";
import { useState, useEffect } from "react";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import InventoryBanner from "../../components/InventoryBanner/InventoryBanner";
import InventorySortBar from "../../components/InventorySortBar/InventorySortBar";
import "./InventoryPage.scss";

const InventoryPage = () => {
  const [inventoryData, setInventoryData] = useState();
  const requestApi = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestApi + "/inventories");
        setInventoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="inventory">
      <div className="inventory__container">
        <InventoryBanner />
        <InventorySortBar />
        {inventoryData?.map((item) => (
          <InventoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
