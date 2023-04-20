import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import {Link, useNavigate} from 'react-router-dom'

interface Properties {
    path?: string,
}

const ArrowLeft = ({path}:Properties) => {
    const navigate = useNavigate()

    return(
        <div style={{width:"30px", marginLeft: "20px", marginTop:"20px"}}>
            {
             path ?
             <Link to={path} data-testid='LinkSpecificPath'>
             <ArrowLeftIcon/>
             </Link> :
             <div onClick={() => navigate(-1)} data-testid='LinkLastPath'>
              <ArrowLeftIcon/>
             </div>
            }
        </div>
    )
}

export default ArrowLeft;
