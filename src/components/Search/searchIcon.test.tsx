import SearchIcon from './searchIcon';
// import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import { mount } from 'enzyme';

jest.mock('react-redux', () => {
    const { Provider, useSelector} = jest.requireActual('react-redux');

    return{
        useDispatch: jest.fn(),
        useSelector,
        Provider
    }
})

test('Tesing useSelector', () => {
    const dispatchMock = jest.fn();

    // const wrapper = mount(
    //     <Provider>
    //         <SearchIcon/>
    //     </Provider>
    // )
})


// it('renders correctly', () => {
//     const tree = renderer
//      .create(<SearchIcon/>)
//      .toJSON();
//     expect(tree).toMatchSnapshot();
// })