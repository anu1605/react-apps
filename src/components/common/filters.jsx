const Filter = ({ genres, onFilter, objName, objId, selectedFilter }) => {
  return (
    <div style={{ width: "fit-content" }}>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            className={
              selectedFilter === genre[objName]
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onFilter(genre[objName])}
            key={genre[objId]}
          >
            {genre[objName]}
          </li>
        ))}
      </ul>
    </div>
  );
};

Filter.defaultProps = {
  objName: "name",
  objId: "_id",
};

export default Filter;
