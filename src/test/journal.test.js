import JournalEntry from '../Components/JournalEntry/JournalEntry';
import React from 'react';
import { shallow, mount, enzyme } from 'enzyme';

describe('JournalEntry component', () => {
  const wrapper = shallow(<JournalEntry />);

  it('should be selectable by class "journal-container"', () => {
    expect(wrapper.is('.journal-container')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<JournalEntry />).find('.journal-container').length).toBe(1);
  });
})
