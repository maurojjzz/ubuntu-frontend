import { render, screen, fireEvent } from '@testing-library/react';
import ShowMyGoogleUserName from '../../../components/showUser/showUser';
import UseAuth from '../../jwt/useAuth';
import { jest } from '@jest/globals';
import { describe, test, expect } from '@jest/globals';
import { beforeEach } from '@jest/globals';


beforeEach(() => {
    UseAuth.mockClear();
    });
    

describe('ShowMyGoogleUserName', () => {
  test('should render nothing if authContext is undefined', () => {
    UseAuth.mockReturnValue(undefined);
    const { container } = render(<ShowMyGoogleUserName />);
    expect(container.firstChild).toBeNull();
  });

  test('should render nothing if user is not present', () => {
    UseAuth.mockReturnValue({ user: null, logout: jest.fn() });
    const { container } = render(<ShowMyGoogleUserName />);
    expect(container.firstChild).toBeNull();
  });

  test('should render username and toggle logout button visibility', () => {
    const logoutMock = jest.fn();
    UseAuth.mockReturnValue({ user: { username: 'TestUser' }, logout: logoutMock });

    render(<ShowMyGoogleUserName />);

    // Verificar que el nombre de usuario se muestra
    expect(screen.getByText('TestUser')).toBeInTheDocument();

    // Verificar que el botón de cerrar sesión no está visible inicialmente
    expect(screen.queryByText('cerrar sesión')).not.toBeInTheDocument();

    // Simular clic en el botón de usuario
    fireEvent.click(screen.getByText('TestUser'));

    // Verificar que el botón de cerrar sesión aparece
    expect(screen.getByText('cerrar sesión')).toBeInTheDocument();

    // Simular clic en el botón de cerrar sesión
    fireEvent.click(screen.getByText('cerrar sesión'));

    // Verificar que la función de logout ha sido llamada
    expect(logoutMock).toHaveBeenCalled();
  });
});
