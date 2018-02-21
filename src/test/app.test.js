import App from '../app';
import Journal from '../Components/Journal/Journal';
import Review from '../Components/Review/Review';
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';

describe('App', () => {

  const wrapper = shallow(<App />);

  it('should be selectable by class "app-container"', () => {
    expect(wrapper.is('.app-container')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.app-container').length).toBe(1);
  });
  it('should render a Navbar component', function() {
    expect(wrapper.find('Navbar')).toHaveLength(1);
  });
  it('should render a Profile component', function() {
    expect(wrapper.find('Profile')).toHaveLength(1);
  });
  it('should render a SignUp component', function() {
    expect(wrapper.find('SignUp')).toHaveLength(1);
  });
  it('should not render an IceCream component', function() {
    expect(wrapper.find('IceCream')).toHaveLength(0);
  });
});
