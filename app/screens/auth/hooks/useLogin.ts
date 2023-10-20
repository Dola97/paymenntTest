import {useState} from 'react';
import {api} from '../../../api/api';
import Toast from 'react-native-toast-message';
import {useAppDispatch} from '../../../store/hooks';
import {saveUser} from '../../../store/user/user-slice';

const LOGIN_ROUTE = '/auth/local';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (identifier: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(LOGIN_ROUTE, {
        identifier,
        password,
      });
      dispatch(saveUser(response.data?.user));
    } catch (err: any) {
      console.log('er', err);
      Toast.show({
        type: 'error',
        text1:
          err?.response?.data?.error?.message ||
          'An error occurred during login.',
      });
    } finally {
      setLoading(false);
    }
  };

  return {login, loading, error};
};

export default useLogin;
