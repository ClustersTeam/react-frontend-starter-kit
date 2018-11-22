import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

describe('<Button />', () => {
    it('should have a header called \'Button\'', () => {
        const wrapper = shallow(<Button />);
        const actual = wrapper.find('button').text();
        const expected = 'Button';

        expect(actual).toBe(expected);
    });

    it('should have a class name \'btn\'', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.hasClass('btn')).toBe(true);

    });
});
