//components
import Item from 'components/item/item'
import {Header} from 'components/header/header'
//helpers 
import routes from 'routes/routes'
import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom';
import NotFound from 'components/notFound/notFound'
//custom hooks
import useFetch from 'hooks/fetchHook/fetchHook';

function Home (){
  const { products: { testRoute}} = routes
  const pathName = useLocation().pathname

  const { error, data } = useFetch({
    url: new URL(testRoute),
  })

 
  //getting the data from the search the user made
  const search = useSelector((state:any) => (console.log(state, "test"), state.search.dataSearch))
  
  // Getting the last search from the array made when the user make a search
  const lastSearch = search[search.length -1]
  
  if(pathName !== '/products'){
    return <NotFound/>
  }

  return (
    lastSearch === false ?
    <NotFound/> :
    <div className="home">
      <div className="home__container ">
      <Header/>
        <div className="home__row">
          <Item
          newData={data}
          />
        </div>
      </div>
    </div>
  )
}

export default Home