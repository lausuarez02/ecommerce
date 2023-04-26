//components
import Item from 'components/item/item'
import {Header} from 'components/header/header'
//helpers 
import routes from 'routes/routes'
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, useSearchParams} from 'react-router-dom';
import NotFound from 'components/notFound/notFound'
//custom hooks
import useFetch from 'hooks/fetchHook/fetchHook';
import { useEffect } from 'react';
import { mainSearchData } from 'redux/reducers/searchReducer';

function Home (){
  const dispatch = useDispatch()
  const { products: { testRoute}} = routes
  const pathName = useLocation().pathname
  //Getting the params from ?search=something
  const [searchParams] = useSearchParams();
  const urlValue = searchParams.get('search')

  //fetching the data
  const { error, data } = useFetch({
    url: new URL(testRoute),
  })

 
  //getting the data from the search the user made
  const search = useSelector((state:any) => ( state.search.dataSearch))
  // Getting the last search from the array made when the user make a search
  const lastSearch = search[search.length -1]
  //dispatch data if user changes the value directly from the url
  if(lastSearch !== urlValue ){
    dispatch(mainSearchData(urlValue))
  }
  
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