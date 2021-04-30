import { render } from '@testing-library/react';

import { CourseCard } from './index';

describe('<CourseCard />', () => {
  it('should render', () => {
    const component = render(<CourseCard />);
    expect(component).toBeTruthy();
  });
});
