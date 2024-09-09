import react from "react";

const SortList = ({handleSortChange, sortOption}) => {
  return (
    <div className="todo-sort">
      <button
        className={`sort-button ${sortOption === "date" ? "active" : ""}`}
        onClick={() => handleSortChange("date")}
      >
        Sort by Date
      </button>
      <button
        className={`sort-button ${sortOption === "title" ? "active" : ""}`}
        onClick={() => handleSortChange("title")}
      >
        Sort by Title
      </button>
    </div>
  );
};

export default SortList;

