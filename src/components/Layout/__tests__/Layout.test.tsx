import { Navigation, useNavigation } from 'react-router-dom';
import { MockedFunction } from 'vitest';
import { render, screen } from '../../../testUtils/reactTestingLibraryUtils';
import Layout from '../index';

vi.mock('react-router-dom');

const mockUseNavigation = useNavigation as MockedFunction<typeof useNavigation>;

describe('Layout', () => {
  it('Loading overlay is visible if navigation is loading', () => {
    mockUseNavigation.mockReturnValue({ state: 'loading' } as Navigation);
    render(<Layout />);
    expect(screen.queryByTestId('loading-overlay')).not.toHaveClass('hidden');
  });
  it('Loading overlay is not visible if navigation is not loading', () => {
    mockUseNavigation.mockReturnValue({ state: 'idle' } as Navigation);
    render(<Layout />);
    expect(screen.queryByTestId('loading-overlay')).toHaveClass('hidden');
  });
});
