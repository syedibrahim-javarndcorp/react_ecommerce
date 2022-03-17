import {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Routes from '../constants/routes';

const NotFoundScreen = () => {

    const history=useHistory()
    
    useEffect(() => {
        let a=setTimeout(() => {
            history.push(Routes.PRODUCTLISTROUTE)        
        }, 2000);

        return ()=>clearTimeout(a)
    }, [])


    return (
        <div>
            <center><h1>404 Not found.</h1></center>
        </div>
    )
}

export default NotFoundScreen
