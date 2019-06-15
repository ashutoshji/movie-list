
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../MovieCard';


describe('MovieCard test', () => {
  it('MovieCard should match snapshot', () => {
    const component = renderer.create(<MovieCard
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
