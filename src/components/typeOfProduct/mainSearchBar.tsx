import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {mainSearchData} from 'redux/reducers/searchReducer'
import {useNavigate} from 'react-router-dom';

const MainSearchBar = () => {
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const SearchSubmitButton = () => {
        if(debouncedTerm !== ''){
            dispatch(mainSearchData(debouncedTerm))
            navigate(`products?search=${debouncedTerm}`)
        }
        else{
          dispatch(mainSearchData(''))
        }
    }

    return(
        <div>
        <div className="relative mt-2 rounded-md" style={{paddingTop: "20px"}}>
          <div className="flex lg:ml-6" >
          <input type="text" name="price" id="price" 
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius:"50px"}}
          onChange={e => setDebouncedTerm(e.target.value)}
          value={debouncedTerm}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Item..."/>
          <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Search</span>
          <div onClick={() => SearchSubmitButton()}>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </a>
        </div>
      </div>
      </div>
    )
}

export default MainSearchBar;