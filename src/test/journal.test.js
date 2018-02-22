import Journal from '../Components/Journal/Journal';
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';

describe('Journal component', () => {
  const wrapper = shallow(<Journal />);

  it('should be selectable by class "journal-container"', () => {
    expect(wrapper.is('.journal-container')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<Journal />).find('.journal-container').length).toBe(1);
  });
})
