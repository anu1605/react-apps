const Movies = (props) => {
  const { handleHeart, movieLength, moviesList, deleteMovie } = props;
  if (movieLength === 0) {
    return <p>There are no movies in the database</p>;
  }
  return (
    <div className="movie-container">
      <p>{"There are " + movieLength + " in the database"}</p>
      <table id="table" className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td id={movie.id}>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => handleHeart(movie)}
                    className={movie.heartClass}
                    aria-hidden="true"
                  ></i>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteMovie(movie);
                    }}
                    className="btn btn-danger"
                  >
                    delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
