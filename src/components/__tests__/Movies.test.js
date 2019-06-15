
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Movies from '../Movies';

const data = 

describe('Movies test', () => {
  it('Movies should match snapshot', () => {
    const component = renderer.create(<Movies
      movies={undefined} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
