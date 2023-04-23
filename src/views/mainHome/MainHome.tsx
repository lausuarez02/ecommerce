//components
import CardTypeProduct from 'components/typeOfProduct/cardTypeProduct'
import {Header} from 'components/header/header'
//routes 
import routes from 'routes/routes'
// helpers
import useFetch from 'hooks/fetchHook/fetchHook'
import MainSearchBar from 'components/typeOfProduct/mainSearchBar'
import TitleMainProduct from 'components/typeOfProduct/titleMainProduct'
import LineSeparetor from 'components/lineSeparetor/lineSeparetor'

function MainHome (){
    const { products:{ testRoute}} = routes 
      const { error, data } = useFetch({
    url: new URL(testRoute),
    revalidate: false
  })

  return (
    <div className="home">
      <div className="home__container ">
      <Header search="false"/>
        </div>
        <div>
        <div className="bg-white py-24 sm:py-20">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleMainProduct title='Search'/>
        <MainSearchBar/>
         <LineSeparetor/>
            <CardTypeProduct
            data={data}
            />
             </div>
      </div>
        </div>
      </div>
  )
}

export default MainHome