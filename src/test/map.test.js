import Map from '../Components/Map/Map';
import React from 'react';
import { shallow, mount, render, enzyme } from 'enzyme';

describe('Map component', () => {
  const wrapper = shallow(<Map />);

  it('should render without an error', () => {
    expect(shallow(<Map />).contains(<div className="map">Future Map Goes Here.</div>)).toBe(true);
  });
  it('should be selectable by class "map"', () => {
    expect(wrapper.is('.map')).toBe(true);
  });
  it('should mount in a full DOM', () => {
    expect(mount(<Map />).find('.map').length).toBe(1);
  });
  it('should render to static HTML', () => {
    expect(render(<Map />).text()).toEqual('Future Map Goes Here.');
  });
});
