import CartBottom from './cartBottom';
// utils
import { Provider } from 'react-redux';
import {render} from '@testing-library/react';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate
}))

describe('Test cartBotton component', () => {
    let store: any;
    beforeEach(() => {
        store = createStore(mockedUsedNavigate)
    })

    const setUp = () => {
        const {getAllByTestId} = render(
            <BrowserRouter>
            <Provider store={store}>
                <CartBottom/>
            </Provider>
            </BrowserRouter>
        )
        const divElement = getAllByTestId('mainContainerCartBottom');
        return {
            divElement
        }
    }

    it('should see the bottom of it', () => {
        const {divElement} = setUp();
        expect(divElement).not.toBe(Array)
    })
})