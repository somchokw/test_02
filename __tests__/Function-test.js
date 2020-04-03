import 'react-native';
import React from 'react';
import Home from '../src/Home';
import renderer from 'react-test-renderer';

it('function and state test care', () => {
  let HomeData = renderer.create(<Home />).getInstance();
  HomeData.change(2);
  expect(HomeData.state.data).toEqual(10);
  expect(HomeData.onPress(3)).toEqual(13);
});
