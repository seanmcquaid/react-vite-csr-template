import { render, screen } from '../../../testUtils/reactTestingLibraryUtils';
import PostInfo from '../PostInfo';

describe('PostInfo', () => {
  it('Does not display a post if no post is passed in', () => {
    render(<PostInfo post={null} />);
    expect(screen.queryByTestId('post-info')).toBeNull();
  });
});
