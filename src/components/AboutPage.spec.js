import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'About';

    expect(actual).toEqual(expected);
  });

});
