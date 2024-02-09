import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditWarehousePage from "./pages/EditPage/EditWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventory/edit/:id" element={<EditInventoryPage />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehousePage />} />
          <Route path="/inventory/add" element={<AddInventoryItem />} />
          <Route path="/warehouse/add" element={<AddWarehouse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
