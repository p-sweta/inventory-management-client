import axios from "axios";
import { useState, useEffect } from "react";

async function getWarehouses() {
  try {
    const response = await axios.get("http://localhost:8080/warehouses");
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
    const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
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
    .put(`http://localhost:8080/warehouses/${id}`, warehouse)
    .then((response) => {
      console.log(response);
    });
}

function addNewWarehouse(warehouse){
  axios
  .post('http://localhost:8080/warehouses', warehouse)
  .then((response) => {
    console.log(response)
  })
}
export { getWarehouseById, useWarehouseById, putFunctionToEditWarehouse, addNewWarehouse };
export default useWarehouses;
export { getWarehouses };
