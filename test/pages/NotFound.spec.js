import React from 'react';
import { mount } from 'enzyme';

import NotFound from 'pages/NotFound';

function setup() {
  return mount(<NotFound />);
}

describe('NotFound', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should redirect to home', () => {
    navigate({ pathname: '/some-pages' });

    wrapper.find('Link').simulate('click');
    expect(location.pathname).toBe('/');
  });
});
