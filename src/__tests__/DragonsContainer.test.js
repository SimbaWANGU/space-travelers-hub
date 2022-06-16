import React from 'react';
import renderer from 'react-test-renderer';
import DragonContainer from '../components/DragonsContainer';

it('matches Dragon container', () => {
  const tree = renderer.create(
    <DragonContainer />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
