import {ReactComponent as StarFull} from '../icons/star-full.svg';
import {ReactComponent as StarHalf} from '../icons/star-half.svg';
import {ReactComponent as StarEmpty} from '../icons/star.svg';
import './style.css';
function MovieStars(){
    return(
        <div className="dsmovie-stars-container">
            <StarFull/>
            <StarFull/>
            <StarFull/>
            <StarHalf/>
            <StarEmpty/>

        </div>
    );
}
export default MovieStars;