import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Profile from '../components/Profile/Profile';

const MockProfileComponent = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);

describe('My profile component', () => {
  it('renders without crashing', () => {
    render(<MockProfileComponent />);
    const missionsHeaderText = screen.getByText(/My Missions/i);
    expect(missionsHeaderText).toBeInTheDocument();
  });
});
