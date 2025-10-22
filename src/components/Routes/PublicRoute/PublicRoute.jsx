import { Navigate } from 'react-router-dom';
import { getToken } from '../../../redux/user/userSelectors';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component }) => {
  const token = useSelector(getToken);

  return <>{token ? <Navigate to="home" /> : <Component />}</>;
};

export default PublicRoute;
