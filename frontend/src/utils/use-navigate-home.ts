import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

export function useNavigateHome() {
  const history = useHistory();

  return useCallback(() => history.push('/'), []);
}
