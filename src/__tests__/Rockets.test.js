import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../pages/Rockets';

describe('Rocket page tests', () => {
  it('Page renders as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Page is visible to the user', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('rocketsDisplay')).toBeInTheDocument();
  });
});
