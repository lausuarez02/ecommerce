import {Link } from 'react-router-dom'
//components
import TitleMainProduct from './titleMainProduct'
import LoadingSpinner from 'components/loading/Loading';

function CardTypeProduct({data}:any) {  
  if(data === null){
    return <div>Not Data found</div>
  }
  return (

<div>
    <div className="bg-white py-24 sm:py-32">
    <TitleMainProduct title='Type of Products'/>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {data != undefined ? (data[0]['products'] as Object as any[] ).map((item:any) => {
            return(
            <div key={item.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <Link to={item.color}>
             <div className="p-8 sm:p-10 lg:flex-auto">
             <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h3>
             <p className="mt-6 text-base leading-7 text-gray-600">{item.imageAlt}</p>
           </div>
           <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                 <img src={item.image}
                 className="h-full w-full object-cover rounded-3xl object-center lg:h-full lg:w-full"
                 style={{maxWidth: "400px"}}
                 />
           </div>
           </Link>
           </div>
        )}) : 
        <LoadingSpinner/>}
  </div>
</div>
</div>
  )
}

export default CardTypeProduct;
