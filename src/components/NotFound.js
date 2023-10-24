import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Page is not found. Please go back to <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound;
