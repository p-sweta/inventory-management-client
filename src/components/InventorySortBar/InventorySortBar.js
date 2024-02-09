import "./InventorySortBar.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
const InventorySortBar = () => {
  return (
    <div className="sort-bar-container">
      <div className="label__inventory">
        <label className="label">INVENTORY ITEM</label>
        <img className="sort-icon" src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="label__category">
        <label className="label">CATEGORY</label>
        <img className="sort-icon" src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="label__status">
        <label className="label">STATUS</label>
        <img className="sort-icon" src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="label__quantity">
        <label className="label">QTY</label>
        <img className="sort-icon" src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="label__warehouse">
        <label className="label">WAREHOUSE</label>
        <img className="sort-icon" src={sortIcon} alt="Sort Icon" />
      </div>
      <label className="label label__actions">ACTIONS</label>
    </div>
  );
};

export default InventorySortBar;
