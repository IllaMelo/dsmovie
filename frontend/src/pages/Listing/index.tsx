import MovieCard from "assets/Components/MovieCard";
import Pagination from "assets/Components/Pagination";
function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
