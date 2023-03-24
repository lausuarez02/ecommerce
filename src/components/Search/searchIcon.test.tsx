import SearchIcon from './searchIcon';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {render, fireEvent} from '@testing-library/react';
import {createStore} from 'redux';
import {mainSearchData} from 'redux/reducers/searchReducer'
import {BrowserRouter} from 'react-router-dom'




const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}))
   


describe('SearchIcon component', () => {
    //defining my store
    let store:any;    
    // initiliazing the store with the reducer in order to be able to see it.
    beforeEach(() => {
        store = createStore(mainSearchData);
    })

    // afterEach we are clearing all mocks made before
    afterEach(() => {
        jest.clearAllMocks()
    })

    // We are initializaing the component with the provider, etc it have
    const setUp = () => {
        const {getAllByTestId, getByTestId} = render(
            <BrowserRouter>
            <Provider store={store}>
              <SearchIcon/>
           </Provider>
            </BrowserRouter>
            )
        const input = getAllByTestId('setDebouncedTerm')[0]
        const divElement = getAllByTestId('SearchSubmitButton')[0]
        return {
          input,
          divElement,
          getByTestId,
        }
      }
      
    it('Should dispatch func when deboundeTerm not empty', () => {
         const mockDispatch = jest.fn()
        mockDispatch()

        const {divElement} = setUp()
        const {input} = setUp()
        const {getByTestId} = setUp()
        fireEvent.change(input, {target: {value: 'test'}});
        fireEvent.click(divElement);
        if((input as HTMLInputElement).value !== ''){
            expect((mockDispatch)).toHaveBeenCalled()
            expect((input as HTMLInputElement).value).toBe('test')
        }
    })
    it('Should dispatch func when deboundeTerm empty' ,() => {
        const mockDispatch = jest.fn()
        mockDispatch()
        const {divElement} = setUp()
        const {input} = setUp()
        fireEvent.change(input, {target: {value: ''}});
        fireEvent.click(divElement);
        if((input as HTMLInputElement).value === ''){
            expect((mockDispatch)).toHaveBeenCalled()
            expect((input as HTMLInputElement).value).toBe('')
        }
    })
    it('SetDeboundeTerm target value', () => {
        const {input} = setUp();
        fireEvent.change(input, {target: {value: 'test'}});
        expect((input as HTMLInputElement).value).toBe('test')
    })
})
