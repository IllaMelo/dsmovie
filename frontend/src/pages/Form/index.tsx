import FormCard from 'assets/Components/FormCard';
import {Link ,useParams} from 'react-router-dom';
import {Movie} from 'types/movie'

function Form() {

  const params = useParams();
  
  return (
    <FormCard movieId={`${params.movieId}`}/>
    
  );
}
export default Form;
