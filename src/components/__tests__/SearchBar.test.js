
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar';


describe('SearchBar test', () => {
  it('SearchBar should match snapshot', () => {
    const component = renderer.create(<SearchBar
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
