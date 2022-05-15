import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';
// import { Movie } from 'types/movies';


// type Props = {
//     movie : Movie;
// }

function Form() {

    const params = useParams();

    return (
       <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Form;