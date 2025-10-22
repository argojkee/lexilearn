import { Link } from 'react-router-dom';

const DictionaryLink = ({ route, text }) => {
  return <Link to={route}>{text}</Link>;
};

export default DictionaryLink;
