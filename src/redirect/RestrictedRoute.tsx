import { Navigate } from 'react-router-dom';
import { useUserState } from '../hooks/useUserState';
import { RedirectProps } from './redirect.types';

export const RestrictedRoute: React.FC<RedirectProps> = ({
  children,
  redirectTo = '/',
}) => {
  const { name } = useUserState();

  return name ? <Navigate to={redirectTo} /> : <>{children}</>;
};
