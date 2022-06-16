import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Dragonsdisplay from '../pages/Dragons';
import store from '../redux/configureStore';

it('matches Dragon container', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Dragonsdisplay />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
