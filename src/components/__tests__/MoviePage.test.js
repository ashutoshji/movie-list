
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from '../MoviePage';


describe('MoviePage test', () => {
  it('MoviePage should match snapshot', () => {
    const component = renderer.create(<MoviePage
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
