import react from "react";

const FilterList = ({handleFilterChange, filter}) => {
  return (
    <div className="todo-filter">
      <button
        className={`filter-button ${filter === "all" ? "active" : ""}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`filter-button ${filter === "completed" ? "active" : ""}`}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={`filter-button ${filter === "incomplete" ? "active" : ""}`}
        onClick={() => handleFilterChange("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterList;

