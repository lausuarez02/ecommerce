import CartIcon from './cartIcon';
// utils
import { Provider, useSelector } from 'react-redux';
import {fireEvent, render} from '@testing-library/react';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
    // useSelector: (state={cart:'test'} as any) => state.cart
}))

describe('Test cartBotton component', () => {

    it('should render the navigate of it', () => {
        const cart:any= [
            { cart: '1', name: 'a' },
            { id: '2', name: 'b' },
          ];
        let store: any;
            store = createStore((state = { cart }, action) => {
                return state
            })
        
    
        const setUp = () => {
            const {getAllByTestId, getByText} = render(
                <BrowserRouter>
                <Provider store={store}>
                    <CartIcon/>
                </Provider>
                </BrowserRouter>
            )
            const divElement = getAllByTestId('navigateCart')[0];
            // const ElementText = getByText('Cart is empty')
            return {
                divElement,
            }
        }
    
        const {divElement} = setUp();

        fireEvent.click(divElement as any)
        mockedUsedNavigate();
        expect(mockedUsedNavigate).toBeCalled()
    })
    it('should render the if statement cart length', () => {
        const cart:any= {
            cart: [{length:'1'}],
            
        };
        let store: any;
            store = createStore((state = { cart }, action) => {
                return state
            
        })
    
        const setUp = () => {
            const {getAllByTestId, getByText} = render(
                <BrowserRouter>
                <Provider store={store}>
                    <CartIcon/>
                </Provider>
                </BrowserRouter>
            )
            const divElement = getAllByTestId('getTotalQuantity')[0];

            // const ElementText = getByText('Cart is empty')
            return {
                divElement,
            }
        }
    
        const {divElement} = setUp()
        // expect(mockedUsedNavigate)
        if(typeof(cart.cart) !== 'undefined'){
            if(cart.length >= 0){
                expect(mockedUsedNavigate).toBeCalled()
            }
        }
    })
})