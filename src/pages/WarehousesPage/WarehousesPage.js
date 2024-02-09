import WarehouseList from "../../components/Warehouse/WarehouseList";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import "../../components/Warehouse/WarehouseList.scss";

const WarehousesPage = () => {
  return (
    <>
      <div className="warehouse">
        <div className="warehouse__container">
          <div className="warehouse__banner">
            <div className="warehouse__header">
              <h1 className="warehouse__title">Warehouses</h1>
            </div>
            <div className="warehouse__banner-actions">
              <div className="warehouse__search">
                <img
                  className="warehouse__search-icon"
                  src={searchIcon}
                  alt="search icon"
                />
                <input
                  className="warehouse__search-input"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div className="warehouse__add-button-container">
                <Link to="/warehouse/add" className="warehouse__add-link">
                  <button className="warehouse__add-button">
                    + Add New Warehouse
                  </button>
                </Link>
              </div>
            </div>
            <div className="warehouse__table-header">
              <div className="warehouse__table-header-option">
                <h3 className="warehouse__table-header-name">WAREHOUSE </h3>
                <img
                  className="warehouse__table-header-sort"
                  src={sortIcon}
                  alt="sort arrow"
                />
              </div>
              <div className="warehouse__table-header-option">
                <h3 className="warehouse__table-header-name warehouse__table-header-name--address">
                  ADDRESS{" "}
                </h3>
                <img
                  className="warehouse__table-header-sort"
                  src={sortIcon}
                  alt="sort arrow"
                />
              </div>
              <div className="warehouse__table-header-option">
                <h3 className="warehouse__table-header-name warehouse__table-header-name--contact">
                  CONTACT NAME{" "}
                </h3>
                <img
                  className="warehouse__table-header-sort"
                  src={sortIcon}
                  alt="sort arrow"
                />
              </div>
              <div className="warehouse__table-header-option">
                <h3 className="warehouse__table-header-name">
                  CONTACT INFORMATION{" "}
                </h3>
                <img
                  className="warehouse__table-header-sort"
                  src={sortIcon}
                  alt="sort arrow"
                />
              </div>
              <h3 className="warehouse__table-header-name">ACTIONS</h3>
            </div>
          </div>
          <WarehouseList />
        </div>
      </div>
    </>
  );
};

export default WarehousesPage;
