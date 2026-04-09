import { Link } from 'react-router';
import errorImg from '../../assets/images/App-Error.png'

const NotFoundPage = () => {
    return ( 
        <div className='flex flex-col items-center mt-10 gap-5'>
            <div>
                <img src={errorImg} alt="Error Image" />
            </div>
            <div>
                <Link to={'/'} className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </div>
     );
}
 
export default NotFoundPage;