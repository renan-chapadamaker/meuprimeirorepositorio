import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para página principal.</Link>
    </div>
  );
}

export default NotFound;