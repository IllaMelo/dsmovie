import MovieCard from "assets/Components/MovieCard";
import Pagination from "assets/Components/Pagination";
function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
