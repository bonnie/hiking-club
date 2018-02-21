import Navbar from '../Components/Navbar/Navbar';
import React from 'react';
import { shallow, mount, render, enzyme } from 'enzyme';

describe('Navbar component', () => {
  const wrapper = shallow(<Navbar />);

  it('should be selectable by class "map"', () => {
    expect(wrapper.is('.navbar-container')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<Navbar />).find('.navbar-container').length).toBe(1);
  });
  it('should contain the text "trails"', () => {
    expect(wrapper.contains(<p>Trails</p>));
  })
})
