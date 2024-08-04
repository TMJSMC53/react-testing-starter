import { render, screen } from '@testing-library/react';

import { User } from '../../src/entities';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
  it('should render the name of the user', () => {
    const user: User = { id: 1, name: 'Triola' };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it('should render the edit button if the user is admin', () => {
    const user: User = { id: 1, name: 'Triola', isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it('should not render the edit button if the user is not admin', () => {
    const user: User = { id: 1, name: 'Triola' };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
