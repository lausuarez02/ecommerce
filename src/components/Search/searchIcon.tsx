import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import {mainSearchData} from 'redux/reducers/searchReducer'
import { useDispatch } from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';

interface SearchData {
  search?: {
    search?: any
  }
}

const SearchIcon = ({search}:SearchData) => {
  const [debouncedTerm, setDebouncedTerm] = useState() as any;
  const dispatch = useDispatch()
  const pathName = useLocation().pathname
  const navigate = useNavigate()

  useEffect(() => {
    if(search !== undefined){
      const {search: {dataSearch}} = search
      setDebouncedTerm(dataSearch[0])
      // console.log(dataSearch[0])
    }
  }, [])

  // update 'term' value after 1 second from the last update of 'debouncedTerm'
  // useEffect(() => {
  //     const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
  //     return () => clearTimeout(timer);
  // }, [debouncedTerm])

  const SearchSubmitButton = () => {
        if(debouncedTerm !== ''){
            // onSearchSubmit(term);
            dispatch(mainSearchData(debouncedTerm))
            navigate(pathName)
        }
        else{
          dispatch(mainSearchData(''))
        }
    }

  const handleKeyDown = (e:any) => {
    if(e.key === 'Enter'){
      if(debouncedTerm !== ''){
        // onSearchSubmit(term);
        dispatch(mainSearchData(debouncedTerm))
        navigate(pathName)
    }
    else{
      dispatch(mainSearchData(''))
    }
    }
  }

    const inputOnChange = (e:any) => {
      setDebouncedTerm(e)
    }

  // submit a new search without clickng button
  //   useEffect(() => {
  //     if(term !== ''){
  //         // onSearchSubmit(term);
  //         dispatch(mainSearchData(term))
  //     }
  //     else{
  //         clearResults();
  //     }
  // }, [term]);

  return (
    <div className="flex lg:ml-6">
     {
      search == '' ?     <input
      type="text"
      data-testid="setDebouncedTerm"
      name="price"
      id="price"
      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Item..."
      onKeyDown={e => handleKeyDown(e)}
      onChange={e => inputOnChange(e.target.value)}
      value={debouncedTerm}
    /> : 
    <input
    type="text"
    data-testid="setDebouncedTerm"
    name="price"
    id="price"
    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    placeholder="Item..."
    onKeyDown={e => handleKeyDown(e)}
    onChange={e => inputOnChange(e.target.value)}
    value={debouncedTerm}
  />
     } 
  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
  <span className="sr-only">Search</span>
  <div  data-testid="SearchSubmitButton" onClick={() => SearchSubmitButton()} >
  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
  </div>
</a>
</div>
  );
}


export default SearchIcon;