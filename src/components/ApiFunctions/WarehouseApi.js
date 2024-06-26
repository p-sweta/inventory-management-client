import axios from "axios";
import { useState, useEffect } from "react";

const api_url = process.env.REACT_APP_API_URL;

async function getWarehouses() {
  try {
    const response = await axios.get(`${api_url}/warehouses`);
    const warehouses = response.data;
    return warehouses;
  } catch (error) {
    console.error(error);
  }
}

function useWarehouses() {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    getWarehouses().then((warehouses) => {
      setWarehouses(warehouses);
    });
  }, []);
  return warehouses;
}

// create function to get warehouse by id to be referenced in EditForm.js
async function getWarehouseById(id) {
  try {
    const response = await axios.get(`${api_url}/warehouses/${id}`);
    const warehouse = response.data;
    return warehouse;
  } catch (error) {
    console.error(error);
  }
}

function useWarehouseById(id) {
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    getWarehouseById(id).then((warehouse) => {
      setWarehouse(warehouse);
    });
  }, [id]);

  return warehouse;
}

function putFunctionToEditWarehouse(id, warehouse) {
  axios
    .put(`${api_url}/warehouses/${id}`, warehouse)
    .then((response) => {
      console.log(response);
    });
}

function addNewWarehouse(warehouse){
  axios
  .post(`${api_url}/warehouses`, warehouse)
  .then((response) => {
    console.log(response)
  })
}
export { getWarehouseById, useWarehouseById, putFunctionToEditWarehouse, addNewWarehouse };
export default useWarehouses;
export { getWarehouses };
