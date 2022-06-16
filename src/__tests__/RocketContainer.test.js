import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketContainer from '../components/RocketContainer';

describe('Rocket page tests', () => {
  const rocket = {
    id: 1,
    rocket_name: 'Rocket',
    description: 'Lorem ipsum dolor sit amet',
    flickr_image: 'https://img.example.com',
    reserved: false,
  };
  it('Page renders as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RocketContainer
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            image={rocket.flickr_image}
            reserved={rocket.reserved}
          />
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
          <RocketContainer />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('rocketContainer')).toBeInTheDocument();
  });
});
