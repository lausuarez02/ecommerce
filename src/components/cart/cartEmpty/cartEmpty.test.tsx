import CartEmpty from './cartEmpty';
// utils
import {render} from '@testing-library/react';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate
}))

describe('Test cartBotton component', () => {

    const setUp = () => {
        const {getAllByTestId, getByText} = render(
                <CartEmpty/>
        )
        const aElement = getAllByTestId('cartEmpty');
        const ElementText = getByText('Cart is empty')
        return {
            aElement,
            ElementText
        }
    }

    it('should see the cart empty of it', () => {
        const {ElementText} = setUp();
        expect(ElementText.textContent).toBe('Cart is empty')
    })
})