import { Navigate } from 'react-router-dom';
import { getToken } from '../../../redux/user/userSelectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component }) => {
  const token = useSelector(getToken);
  const isRedirect = !token;

  return <>{isRedirect ? <Navigate to="/login" /> : <Component />}</>;
};

export default PrivateRoute;
