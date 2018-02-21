import Profile from '../Components/Profile/Profile';
import Journal from '../Components/Journal/Journal';
import Review from '../Components/Review/Review';
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';

describe('Profile component', () => {

  const wrapper = shallow(<Profile />);

  it('should be selectable by class "profile-container"', () => {
    expect(wrapper.is('.profile-container')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<Profile />).find('.profile-container').length).toBe(1);
  });
  it('should render a Map component', () => {
    expect(wrapper.find('Map')).toHaveLength(1);
  });
  it('should render a Journal component', () => {
    expect(wrapper.find('Journal')).toHaveLength(1);
  });
  it('should render a Review component', () => {
    expect(wrapper.find('Review')).toHaveLength(1);
  });
});
