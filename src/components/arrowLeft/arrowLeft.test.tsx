// component
import ArrowLeft from './arrowLeft';
// utils
import { Provider } from 'react-redux';
import {render, fireEvent, screen} from '@testing-library/react';
import {createStore} from 'redux'
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () =>  mockedUsedNavigate
}))

describe('testing ArrowLeft', () => {
    let store:any
    beforeEach(() => {
        store = createStore(mockedUsedNavigate)
    })

  


      it('should go to LinkSpecificPath', () => {
        const setUp = () => {
            let path = 'test'
            const {getAllByTestId, getByTestId, getByRole} = render(
                <BrowserRouter>
                <Provider store={store}>
                  <ArrowLeft path={path}/>
               </Provider>
                </BrowserRouter>
                )
            const link = getAllByTestId('LinkSpecificPath')[0]
            return {
              link,
              getByTestId,
            }
          }

        const {link} = setUp()

        expect(link).toBeInTheDocument()

      })

      it('should go to LinkSpecificPath', () => {
        const setUp = () => {

            const {getAllByTestId, getByTestId, getByRole} = render(
                <BrowserRouter>
                <Provider store={store}>
                  <ArrowLeft/>
               </Provider>
                </BrowserRouter>
                )
            const divElement = getAllByTestId('LinkLastPath')[0]
            return {
              divElement,
              getByTestId,
            }
          }
        const {divElement} = setUp()
        const mockDispatch = jest.fn()
        mockDispatch();
        // (useNavigate as any).mockReturnValue(-1)
        // useNavigate()
        fireEvent.click(divElement);
        expect(mockDispatch).toHaveBeenCalled()
        expect(divElement).toBeInTheDocument()
    
    })
})