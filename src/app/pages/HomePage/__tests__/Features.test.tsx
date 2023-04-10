import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Features } from '../Features';

const shallowRenderer = createRenderer();

describe('<Features />', () => {
  it.only('should render', () => {
    shallowRenderer.render(<Features />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
